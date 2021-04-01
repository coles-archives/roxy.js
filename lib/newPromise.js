const Promise = require('bluebird')

function newPromise (content) {
  const promise = new Promise(content)
  return promise
}

module.exports = newPromise
