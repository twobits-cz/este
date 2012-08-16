suite 'este.router.Router', ->

  Router = este.router.Router
  history = null
  tapHandler = null
  router = null

  setup ->
    history =
      setToken: (token) ->
        dispatchHistoryNavigateEvent token
      dispose: ->
      setEnabled: ->
      addEventListener: ->
    tapHandler =
      dispose: ->
      addEventListener: ->
    router = new Router history, tapHandler

  dispatchHistoryNavigateEvent = (token) ->
    goog.events.fireListeners history, 'navigate', false,
      type: 'navigate'
      token: token

  dispatchTapHandlerTapEvent = (target) ->
    goog.events.fireListeners tapHandler, 'tap', false,
      type: 'tap'
      target: target

  suite 'constructor', ->
    test 'should work', ->
      assert.instanceOf router, este.router.Router

  suite 'start', ->
    test 'should call history.setEnabled with true', (done) ->
      history.setEnabled = (enabled) ->
        assert.isTrue enabled
        done()
      router.start()

  suite 'dispose', ->
    test 'should call history.dispose', (done) ->
      history.dispose = ->
        done()
      router.dispose()

    test 'should call tapHandler.dispose', (done) ->
      tapHandler.dispose = ->
        done()
      router.dispose()

  suite 'routing via history navigate event', ->
    suite 'show should work', ->
      testRoute = (path, token) ->
        test "path: '#{path}', token: '#{token}'", (done) ->
          router.add path, ->
            done()
          router.start()
          dispatchHistoryNavigateEvent token
      testRoute 'foo', 'foo'
      testRoute 'bla', 'bla'
      testRoute 'user/:user', 'user/joe'
      testRoute 'user/:user', 'user/satriani'

    suite 'show should not be called with sensitive true', ->
      testRoute = (path, token) ->
        test "path: '#{path}' should match token: '#{token}'", (done) ->
          router.add path, (->), hide: ->
            done()
          , sensitive: true
          router.start()
          dispatchHistoryNavigateEvent token
      testRoute 'Foo', 'foo'
      testRoute 'Bla', 'bla'
      testRoute 'User/:user', 'user/joe'
      testRoute 'User/:user', 'user/satriani'

    suite 'hide should work', ->
      testRoute = (path, token) ->
        test "path: '#{path}' should match token: '#{token}'", (done) ->
          router.add path, (->), hide: ->
            done()
          router.start()
          dispatchHistoryNavigateEvent token
      testRoute 'foo', 'bla'
      testRoute 'bla', 'foo'
      testRoute 'user/:user', 'product/joe'
      testRoute 'user/:user', 'product/satriani'

    suite 'exception in callback', ->
      test 'should not break processing', ->
        count = 0
        router.add 'foo', ->
          count++
          throw 'Error'
        router.add 'foo', ->
          count++
        router.start()
        dispatchHistoryNavigateEvent 'foo'
        assert.equal count, 2

  suite 'routing via history navigate event', ->
    suite 'show should work', ->
      testRoute = (path, token) ->
        test "path: '#{path}', token: '#{token}'", (done) ->
          router.add path, ->
            done()
          router.start()
          dispatchTapHandlerTapEvent
            nodeType: 1
            getAttribute: (name) ->
              return token if name == 'este-href'
      testRoute 'foo', 'foo'
      testRoute 'bla', 'bla'
      testRoute 'user/:user', 'user/joe'
      testRoute 'user/:user', 'user/satriani'

    suite 'show should work', ->
      testRoute = (path, token) ->
        test "path: '#{path}', token: '#{token}'", (done) ->
          router.add path, ->
            done()
          router.start()
          dispatchTapHandlerTapEvent
            nodeType: 1
            getAttribute: ->
            parentNode:
              nodeType: 1
              getAttribute: (name) ->
                return token if name == 'este-href'
      testRoute 'foo', 'foo'
      testRoute 'bla', 'bla'
      testRoute 'user/:user', 'user/joe'
      testRoute 'user/:user', 'user/satriani'

    suite 'hide should work', ->
      testRoute = (path, token) ->
        test "path: '#{path}' should match token: '#{token}'", (done) ->
          router.add path, (->), hide: ->
            done()
          router.start()
          dispatchTapHandlerTapEvent
            nodeType: 1
            getAttribute: (name) ->
              return token if name == 'este-href'
      testRoute 'foo', 'bla'
      testRoute 'bla', 'foo'
      testRoute 'user/:user', 'product/joe'
      testRoute 'user/:user', 'product/satriani'

  suite 'remove route', ->
    test 'should work for string route', ->
      called = false
      router.add 'user/:user', (params) ->
        assert.equal params['user'], 'joe'
        called = true
      router.start()
      router.remove 'user/:user'
      dispatchHistoryNavigateEvent 'users/joe'
      assert.isFalse called

  suite 'navigate', ->
    test 'should call setToken on history object', (done) ->
      history.setToken = (token) ->
        assert.equal token, 'foo'
        done()
      router.navigate 'foo'

  suite 'pathNavigate user/:name, name: joe', ->
    test 'should call setToken on history object', (done) ->
      history.setToken = (token) ->
        assert.equal token, 'user/joe'
        done()
      router.start()
      router.add 'user/:name', ->
      router.pathNavigate 'user/:name', name: 'joe'

    test 'should call router show', ->
      called = false
      router.start()
      router.add 'user/:name', ->
        called = true
      router.pathNavigate 'user/:name', name: 'joe'
      assert.isTrue called

  suite 'pathNavigate user/:name, name: joe, true', ->
    test 'should call setToken on history object', (done) ->
      history.setToken = (token) ->
        assert.equal token, 'user/joe'
        done()
      router.start()
      router.add 'user/:name', ->
      router.pathNavigate 'user/:name', name: 'joe', true

    test 'should not call router show', ->
      called = false
      router.start()
      router.add 'user/:name', -> called = true
      router.pathNavigate 'user/:name', name: 'joe', true
      assert.isFalse called