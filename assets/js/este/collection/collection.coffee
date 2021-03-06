###*
  @fileoverview Collection. Use it for storing various items. JSON, este.Model,
  EventTarget instance, whatever. Sorting & Filtering included. If item is
  instanceof este.Model, two models with the same id will throw an exception.
  @see ../demos/collection.html

  todo
    consider resort after bubbled change event
###

goog.provide 'este.Collection'

goog.require 'este.Base'
goog.require 'este.Model'
goog.require 'este.Model.Event'
goog.require 'goog.array'

class este.Collection extends este.Base

  ###*
    @param {Array.<Object>=} array
    @param {function(new:este.Model)=} model
    @constructor
    @extends {este.Base}
  ###
  constructor: (array, @model = @model) ->
    super()
    @ids = {}
    @array = []
    @add array if array
    return

  ###*
    @type {Object.<string, boolean>}
    @protected
  ###
  ids: null

  ###*
    @type {Array.<Object>}
    @protected
  ###
  array: null

  ###*
    @type {function(new:este.Model, Object=, Function=)|null}
    @protected
  ###
  model: null

  ###*
    @type {Function}
    @protected
  ###
  sortBy: null

  ###*
    Function like goog.array.defaultCompare.
    @type {Function}
    @protected
  ###
  sortCompare: null

  ###*
    @type {boolean}
    @protected
  ###
  sortReversed: false

  ###*
    @param {Array.<Object>|Object} arg
  ###
  add: (arg) ->
    array = if goog.isArray arg then arg else [arg]
    added = []
    for item in array
      if @model && !(item instanceof @model)
        item = new @model item
      @ensureUnique item
      @toggleEventPropagation true, este.Model.eventTypes, item
      added.push item
    @array.push.apply @array, added
    @sortInternal()
    @dispatchAddEvent added
    return

  ###*
    @param {Array|Object} array
    @return {boolean} True if an element was removed.
  ###
  remove: (array) ->
    array = [array] if !goog.isArray array
    removed = []
    for item in array
      @toggleEventPropagation false, este.Model.eventTypes, item
      removed.push item if goog.array.remove @array, item
      @removeUnique item
    return false if !removed.length
    @dispatchRemoveEvent removed
    true

  ###*
    @param {Function} callback
  ###
  removeIf: (callback) ->
    toRemove = goog.array.filter @array, callback
    @remove toRemove

  ###*
    @param {*} object The object for which to test.
    @return {boolean} true if obj is present.
  ###
  contains: (object) ->
    goog.array.contains @array, object

  ###*
    @param {number} index
    @return {*}
  ###
  at: (index) ->
    @array[index]

  ###*
    @return {number}
  ###
  getLength: ->
    @array.length

  ###*
    @return {Array.<Object>}
  ###
  toArray: ->
    @array

  ###*
    Serialize into JSON.
    @param {boolean=} raw If true, _cid, metas, and getters are ignored.
    @return {Array.<Object>}
  ###
  toJson: (raw) ->
    if @model
      item.toJson raw for item in @array
    else
      @array.slice 0

  ###*
    Clear collection.
  ###
  clear: ->
    @remove @array.slice 0

  ###*
    Find item
    @param {Function} fn
    @return {*}
  ###
  find: (fn) ->
    for item in @array
      return item if fn item
    return

  ###*
    Find item by Id
    @param {*} id
    @return {*}
  ###
  findById: (id) ->
    @find (item) =>
      itemId = if @model then item.get('id') else item['id']
      itemId == id

  ###*
    todo: test
    Find item by Id
    @param {*} id
    @return {*}
  ###
  findByClientId: (id) ->
    @find (item) =>
      itemId = if @model then item.get('_cid') else item['_cid']
      itemId == id

  ###*
    @param {{by: Function, compare: Function, reversed: boolean}=} options
  ###
  sort: (options) ->
    @sortBy = options.by if options?.by != undefined
    @sortCompare = options.compare if options?.compare != undefined
    @sortReversed = options.reversed if options?.reversed != undefined
    @sortInternal()
    @dispatchSortEvent()
    return

  ###*
    @return {function(new:este.Model)|null}
  ###
  getModel: ->
    @model

  ###*
    http://en.wikipedia.org/wiki/Uniform_resource_name
    @return {?string}
  ###
  getUrn: ->
    @model?.prototype?.urn ? null

  ###*
    Filter collection by object or function and returns array of jsons.
    todo: consider return collection if model is defined
    @param {Object|Function} param
    @return {Array}
  ###
  filter: (param) ->
    array = @toJson()
    switch goog.typeOf param
      when 'function'
        # Enforce tighter type assertion. The compiler can infer the type from
        # the assert and removes it during compilation. http://goo.gl/Bxb5h
        goog.asserts.assertInstanceof param, Function
        item for item in array when param item
      when 'object'
        @filter (item) =>
          for key, value of param
            return false if item[key] != value
          true
      else
        null

  ###*
    todo:
      add better annotation
    @param {Function} fn
  ###
  each: (fn) ->
    fn item for item in @array
    return

  ###*
    @param {Array} added
    @protected
  ###
  dispatchAddEvent: (added) ->
    addEvent = new este.Model.Event este.Model.EventType.ADD, @
    addEvent.added = added
    @dispatchCollectionEvent addEvent

  ###*
    @param {Array} removed
    @protected
  ###
  dispatchRemoveEvent: (removed) ->
    removeEvent = new este.Model.Event este.Model.EventType.REMOVE, @
    removeEvent.removed = removed
    @dispatchCollectionEvent removeEvent

  ###*
    @protected
  ###
  dispatchSortEvent: ->
    sortEvent = new este.Model.Event este.Model.EventType.SORT, @
    @dispatchCollectionEvent sortEvent

  ###*
    @param {este.Model.Event} e
    @protected
  ###
  dispatchCollectionEvent: (e) ->
    @dispatchEvent e
    updateEvent = new este.Model.Event este.Model.EventType.UPDATE, @
    updateEvent.origin = e
    @dispatchEvent updateEvent

  ###*
    @protected
  ###
  sortInternal: ->
    return if !@sortBy || !@sortCompare
    @array.sort (a, b) =>
      a = @sortBy a
      b = @sortBy b
      @sortCompare a, b
    @array.reverse() if @sortReversed
    return

  ###*
    Ensure unique item in collection if item is instanceof este.Model.
    @param {*} item
    @protected
  ###
  ensureUnique: (item) ->
    return if !(item instanceof este.Model)
    id = item.get('id') || item.get('_cid')
    key = '$' + id
    if @ids[key]
      goog.asserts.fail "Not allowed to add two models with the same id: #{id}"
    @ids[key] = true

  ###*
    Remove unique id.
    @param {*} item
    @protected
  ###
  removeUnique: (item) ->
    return if !(item instanceof este.Model)
    id = item.get('id') || item.get('_cid')
    key = '$' + id
    delete @ids[key]