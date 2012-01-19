global.assert = require('/usr/local/lib/node_modules/chai').assert

###
	DOM stub (almost). Would be better to not have a mock, but Google Closure
	depends on DOM. For example, dom_.removeNode needs parentNode.
	Instead of complicated, always reimplemented stubs, we implemented several DOM methods.
	It's all about moving complexity from tests to shared (this file) DOM implementation.
	http://martinfowler.com/articles/mocksArentStubs.html
###
global.document =
	addEventListener: ->
	createElement: (tag) ->
		offsetWidth: 0
		offsetHeight: 0
		tagName: tag.toUpperCase()
		nodeType: 1
		className: ''
		ownerDocument: global.document
		style: {}
		appendChild: (node) ->
			node.parentNode = @
			node
		removeChild: (node) ->
			node.parentNode = null if node.parentNode == @
			node
		addEventListener: ->
	defaultView:
		getComputedStyle: (element) ->
			# this is how we can foist computed styles for every element
			element.__currentStyle || {}

global.document.body = global.document.createElement 'body'