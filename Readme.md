
Este - Google Closure project boilerplate and dev stack
-------------------------------------------------------

It's my beloved development stack. Run one script, to compile Coffeescript,
Stylus, Soy templates, update deps.js, run insanely fast unit tests,
automatically just on file change. One console output, to rule them all.
Browser is automatically reloaded when needed. Tested on mac, linux, win.

###How to use it?
  
  - Install Node.js, Java, Python (use version < 3 for windows)
  - Clone repository
  - Type `node run app` into console
  - Open browser at `localhost:8000`
  - Build something beautiful

###Ok. I got it, what's next?

Take a look at the app. It defines structure, namespacing (by features ftw), how component uses templates, custom events, compilation into one über small file. This is just the beginning. TodoMVC (mobile version) is in process. In the meantime, see what `assets/js/*` namespaces contains yet.

Node run options described in `assets/js/dev/run.coffee`.

###Near future

  - TodoMVC (mobile version)
  - localization

###Recommended editor: [Sublime Text](http://www.sublimetext.com)
  
Must-have packages

  - Package Control
  - CoffeeScript
  - Stylus
  - SoyTemplate (custom install https://github.com/anvie/SoyTemplate)
  
Recommended packages

  - Clipboard History
  - JsFormat
  - Git - git commands for command palette
  - LESS
  - SideBarGit, like Tortoise inside Sublimetext
  - sublime-github, to create and browse GitHub Gists.
  - Jade
  
My settings and snippets [here](https://github.com/Steida/Sublimetext-user-settings).

## License 

(The MIT License)

Copyright (c) 2012 Daniel Steigerwald &lt;daniel@steigerwald.cz&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.