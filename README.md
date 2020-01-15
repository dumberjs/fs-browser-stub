# fs-browser-stub [![Build Status](https://travis-ci.org/dumberjs/fs-browser-stub.svg?branch=master)](https://travis-ci.org/dumberjs/fs-browser-stub)

Stub node fs module in browser.

`fs.readFile` is still a function, would not throw an error.
Only when user calls `fs.readFile()`, it then throw an error.
