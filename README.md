# python-spa-client-webpack-starter-kit
quick template to create a python flask server, pushing out a spa index.html using webpack

## prerequisites

* `npm`
* `node`
* `python` is in your PATH (either 2.7.x or 3.6.x)

## dev installation

* `git clone https://github.com/erikyuzwa/python-spa-client-webpack-starter-kit.git appname`
* `cd appname`
* `npm install`
* both python and web frontend dependencies should be installing

## where to put your SPA assets

At this point, you should be able to drop in whatever framework or library you want to use.
JQuery, Angular, React, Vue, etc.

Your source files should go into `app/static/scripts`

## running local Python Flask dev server

* `npm start`
* open `http://localhost:5000` in your favorite browser

## building for distribution

* `npm run build`
* copy `dist/*` to your webserver

# LICENSE

MIT License

Copyright (c) 2017 Erik Yuzwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

