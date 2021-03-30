// imports / variables
const axios = require('axios').default
const chalk = require('chalk')

// docs
/**
 * returns id from username
 * @category user
 * @alias getIDFromName
 * @returns {number} id
 * @param {string} username - a username
 * @example const roxy = require('roxy.js')
 * const userid = await roxy.user.getIDFromName('duixrix')
**/

async function getIDFromName (username) {
  const body = await axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`)
  const id = body.data.Id
  const errorMessage = body.data.errorMessage
  const message = body.data.message
  if (id) {
    return id
  } else if (errorMessage || message) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(errorMessage || message)}`)
  }
}
module.exports = getIDFromName
