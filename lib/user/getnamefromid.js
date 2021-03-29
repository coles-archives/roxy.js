// imports / variables
const axios = require('axios').default
const chalk = require('chalk')

// docs
/**
 * returns username from id
 * @category user
 * @alias getnamefromid
 * @returns {string} username
 * @param {number} id
 * @example const roxy = require('roxy.js')
 * const username = await roxy.user.getnamefromid(1719166332)
**/

async function getnamefromid (id) {
  const body = await axios.get(`https://api.roblox.com/users/${id}`)
  if (!body.status === 200) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('user does not exist')}`)
  } else {
    return body.data.Username
  }
}
module.exports = getnamefromid
