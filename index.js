function getUrl(place = "") {
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      return `${process.env.WEBPACK_DEV_SERVER_URL}#/${place}`;
    }
    return `app://./index.html#/${place}`;
  }

module.exports = getUrl;
