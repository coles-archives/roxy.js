// imports / variables
const chalk = require('chalk')
const Enmap = require('enmap')
const validateCookie = require('./validateCookie')
const options = new Enmap()

// docs
/**
 * initiates client (logs in and sets cookie)
 * @category client
 * @alias initiate
 * @returns {boolean} true if success / false if failure
 * @example const roxy = require('roxy.js')
 * const client = new roxy.client()
 * await client.initiate({cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890'})
**/

async function initiate ({ cookie }) {
  if (!cookie.toLowerCase().includes('warning:-')) throw new Error(`${chalk.bold('roxy.js error:')} no .ROBLOSECURITY warning in cookie`)
  if (validateCookie(cookie)) {
    options.set(cookie, true)
    return true
  } else {
    throw new Error(`${chalk.bold('roxy.js error:')} invalid cookie`)
  }
}

// exports
module.exports = initiate
