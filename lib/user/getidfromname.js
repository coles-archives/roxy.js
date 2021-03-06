// imports / variables
const axios = require('axios').default
const chalk = require('chalk')
const newPromise = require('../newPromise')

// docs
/**
 * returns id from username
 * @category user
 * @alias getIDFromName
 * @returns {Promise<number>} id
 * @param {string} username - a username
 * @example const roxy = require('roxy.js')
 * const userid = await roxy.user.getIDFromName('duixrix')
**/

async function getIDFromName (username) {
  const request = axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`)
  request.catch(function (err) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(err)}`)
  })
  request.then(function (body) {
    const id = body.data.Id
    const errorMessage = body.data.errorMessage
    const message = body.data.message
    if (id) {
      return newPromise(id)
    } else if (errorMessage || message) {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(errorMessage || message)}`)
    }
    if (!body.status === 200) {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('user does not exist')}`)
    }
  })
}
module.exports = getIDFromName
