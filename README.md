# electron-vue-router-url

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/3zbumban/electron-vue-router-url#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/3zbumban/electron-vue-router-url/graphs/commit-activity)

## Install

```sh
npm i electron-vue-router-url --save
```

## Usage

First of all, you need to disable `mode: 'history'` in your vue-router, check in [vue-router docs](https://router.vuejs.org/guide/essentials/history-mode.html)

Then do the following:

**src/main/index.js** example:

```js
const getVueUrl = require("electron-vue-router-url");

ipc.on('showChart', function (e, data) {
  // loads process.env.WEBPACK_DEV_SERVER_URL + #/showChart` or `app://./index.html#/showChart` when build
  const url = getVueUrl("showChart");
  let win = new BrowserWindow({ width: 400, height: 320, webPreferences: {webSecurity: false} })
  win.on('close', function () { win = null })
  win.loadURL(url)
})

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // this is important!
      nodeIntegration: true,
    },
  });

  // loads process.env.WEBPACK_DEV_SERVER_URL + #/` or `app://./index.html#/` when build
  win.loadURL(getVueUrl());

  win.on("closed", () => {
    win = null;
  });
}
```

In your router, use the exact path to your url

**src/renderer/router.js** example

```js
{
   path: '/showChart',
   name: 'showChart',
   component: require('your-router'),
 },
```

`nodeIntegration` must be set to `true` (`nodeIntegration` was `true` by default in previous electron versions, [but false by default in 5.0.0.](https://github.com/electron/electron/pull/16235#issue-241835034))

## Author

👤 **3zbumban**

* Github: [@3zbumban](https://github.com/3zbumban)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [3zbumban](https://github.com/3zbumban).

This project is [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
