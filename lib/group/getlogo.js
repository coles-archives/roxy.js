// imports / variables
const axios = require('axios').default
const chalk = require('chalk')
const newPromise = require('../newPromise')

// docs
/**
 * returns group logo url
 * @category group
 * @alias getLogo
 * @returns {Promise<string>} image url
 * @param {number} groupid - a group id
 * @example const roxy = require('roxy.js')
 * const logo = await roxy.group.getLogo(5097136, 150, true)
**/

async function getLogo (groupid, size, circular) {
  const request = axios.get(`https://thumbnails.roblox.com/v1/groups/icons?groupIds=${groupid}&size=${size || '150'}x${size || '150'}&format=Png&isCircular=${circular || 'false'}`)
  request.catch(function (err) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(err)}`)
  })
  request.then(function (body) {
    if (!body.status === 200 || !body.data.data || !body.data.data[0]) {
      console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('group does not exist')}`)
    } else {
      return newPromise(body.data.data[0].imageUrl)
    }
  })
}
module.exports = getLogo
