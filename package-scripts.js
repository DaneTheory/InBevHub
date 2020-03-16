// const npsUtils = require("nps-utils")


// default: `node -r dotenv/config -r esm -r pretty-error/start ./src/index.js`
// all: `oao run-script start`
// "clean:stopWatches": `watchman watch-del-all`,

module.exports = {
  scripts: {
    default: `mono-run start --ui row --stream 500`,
    status: `oao status`,
    bootstrap: `oao bootstrap`,
    dev: `NODE_ENV=development oao run-script start`,
    "clean:NodeModules": `oao clean`,
    "clean:lockFiles": `rm yarn.lock`,
    "clean:yarnCache": `yarn cache clean`,
    "clean:yarnWork": `yarn start clean:yarnCache`,
    "clean:NodeStuff": `yarn start clean:lockFiles && yarn start clean:NodeModules`,
    "clean": `yarn start clean:NodeStuff && yarn start clean:yarnWork`,
    "reset": `yarn install && yarn start bootstrap`
  }
}
