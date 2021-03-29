class Client {
  constructor () {
    this.initiate = require('./client/initiate')
    this.validateCookie = require('./client/validateCookie')
  }
}

module.exports = Client
