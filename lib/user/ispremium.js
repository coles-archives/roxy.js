// imports / variables
const axios = require('axios').default
const chalk = require('chalk')

// docs
/**
 * gets user premium status
 * @category user
 * @alias ispremium
 * @returns {boolean} true/false
 * @param {number} id
 * @example const roxy = require('roxy.js')
 * const ispremium = await roxy.user.ispremium(1719166332)
**/

async function ispremium (id) {
  const body = await axios.get(`https://premiumfeatures.roblox.com/v1/users/${id}/validate-membership`)
  if (!body.status === 200) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('user does not exist')}`)
  } else if (body.data === 'true') {
    return true
  } else if (body.data === 'false') {
    return false
  }
}
module.exports = ispremium
