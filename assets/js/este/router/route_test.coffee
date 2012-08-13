suite 'este.router.Route', ->

  Route = este.router.Route

  testData = null
  route = null

  setup ->
    setupTestData()
    route = new Route '', (->), {}

  setupTestData = ->
    testData =
      'user/joe':
        path: 'user/:user'
        params: user: 'joe'

      'users':
        path: 'users/:id?'
        params: id: undefined

      'users/1':
        path: 'users/:id?'
        params: id: '1'

      'assets/este.js':
        path: 'assets/*'
        params: ['este.js']

      'assets/steida.js':
        path: 'assets/*.*'
        params: ['steida', 'js']

      'assets/js/este.js':
        path: 'assets/*'
        params: ['js/este.js']

      'assets/js/steida.js':
        path: 'assets/*.*'
        params: ['js/steida', 'js']

      'user/1':
        path: 'user/:id/:operation?'
        params: id: '1', operation: undefined

      'user/1/edit':
        path: 'user/:id/:operation?'
        params: id: '1', operation: 'edit'

      'products.json':
        path: 'products.:format'
        params: format: 'json'

      'products.xml':
        path: 'products.:format'
        params: format: 'xml'

      'products':
        path: 'products.:format?'
        params: format: undefined

      'user/12':
        path: 'user/:id.:format?'
        params: id: '12', format: undefined

      'user/12.json':
        path: 'user/:id.:format?'
        params: id: '12', format: 'json'

      'foo/adam/eva':
        path: /foo\/(\w+)\/(\w+)/
        params: ['adam', 'eva']

  suite 'constructor', ->
    test 'should work', ->
      assert.instanceOf route, Route

  suite 'process', ->
    test 'testData should work', ->
      length = 0
      for url, data of testData
        route = new Route data.path, (params) ->
          assert.deepEqual params, data.params
          length++
        , {}
        route.process url
      assert.equal length, goog.object.getKeys(testData).length

  # suite 'getLink', ->
  #   test 'should work', ->
  #     assert.ok 0