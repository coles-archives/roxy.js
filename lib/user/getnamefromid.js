// imports / variables
const axios = require('axios').default
const chalk = require('chalk')
const newPromise = require('../newPromise')

// docs
/**
 * returns username from id
 * @category user
 * @alias getNameFromID
 * @returns {string}
 * @param {number} id - a user id
 * @example const roxy = require('roxy.js')
 * const username = await roxy.user.getNameFromID(1719166332)
**/

async function getNameFromID (id) {
  const request = axios.get(`https://api.roblox.com/users/${id}`)
  request.catch(function (err) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(err)}`)
  })
  request.then(function (body) {
    if (!body.status === 200) {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('user does not exist')}`)
    } else {
      return newPromise(body.data.Username)
    }
  })
}
module.exports = getNameFromID
