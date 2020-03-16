const npsUtils = require("nps-utils")


// default: `node -r dotenv/config -r esm -r pretty-error/start ./src/index.js`

module.exports = {
  scripts: {
    default: `echo "Hello World!"`,
    bootstrap: `lerna bootstrap`,
    all: `lerna run start`
  }
}
