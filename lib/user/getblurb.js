// imports / variables
const axios = require('axios').default
const chalk = require('chalk')
const newPromise = require('../newPromise')

// docs
/**
 * gets user blurb
 * @category user
 * @alias getBlurb
 * @returns {string} blurb
 * @param {Number} id - a user id
 * @example const roxy = require('roxy.js')
 * const blurb = await roxy.user.getBlurb(1719166332)
**/

async function getBlurb (id) {
  const request = axios.get(`https://users.roblox.com/v1/users/${id}`)
  request.catch(function (err) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(err)}`)
  })
  request.then(function (body) {
    const blurb = body.data.description
    if (blurb) {
      return newPromise(blurb)
    } else if (body.data.errors) {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(body.data.errors[0].message)}`)
    } else {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('unknown error')}`)
    }
  })
}
module.exports = getBlurb
