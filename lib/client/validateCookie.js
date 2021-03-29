// imports / variables
const chalk = require('chalk')
const axios = require('axios').default
const getcsrf = require('../util/getCSRF')

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
  if (!cookie.toLowerCase().includes('warning:-')) return console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('no .ROBLOSECURITY warning in cookie')}`)
  // cookieJar.setCookie(cookie, 'https://www.roblox.com/mobileapi/userinfo')
  axios({
    url: 'https://www.roblox.com/mobileapi/userinfo',
    method: 'GET',
    headers: {
      Cookie: '.ROBLOSECURITY=' + cookie,
      'X-CSRF-TOKEN': getcsrf(cookie)
    },
    // jar: cookieJar,
    withCredentials: true
  }).then((data) => {
    if (!data.data.UserID || !data.data.UserName) {
      return false
    } else {
      return true
    }
  })
}

module.exports = validateCookie
