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
  if (!cookie.toLowerCase().includes('warning:-')) return console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('no .ROBLOSECURITY warning in cookie')}`)
  if (validateCookie(cookie) === true) {
    options.set(cookie, true)
    console.log('success')
  } else {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('invalid cookie')}`)
  }
}

// exports
module.exports = initiate
