// imports / variables
const chalk = require('chalk')

// docs
/**
 * validates cookie provided
 * @category client
 * @alias validateCookie
 * @returns {boolean} true if valid / false if invalid
 * @example const roxy = require('roxy.js')
 * const validate = await roxy.client.validateCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890')
**/

async function validateCookie (cookie) {
  if (!cookie.toLowerCase().includes('warning:-')) throw new Error(`${chalk.bold('roxy.js error:')} no .ROBLOSECURITY warning in cookie`)
}

module.exports = validateCookie
