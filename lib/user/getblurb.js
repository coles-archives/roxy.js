// imports / variables
const axios = require('axios').default
const chalk = require('chalk')

// docs
/**
 * gets user blurb
 * @category user
 * @alias getblurb
 * @returns {string} blurb
 * @param {Number} id
 * @example const roxy = require('roxy.js')
 * const blurb = await roxy.user.getblurb(1719166332)
**/

async function getblurb (id) {
  const body = await axios.get(`https://users.roblox.com/v1/users/${id}`)
  const blurb = body.data.description
  if (blurb) {
    return blurb
  } else if (body.data.errors) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(body.data.errors[0].message)}`)
  } else {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('unknown error')}`)
  }
}
module.exports = getblurb
