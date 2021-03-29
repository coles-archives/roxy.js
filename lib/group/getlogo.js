// imports / variables
const axios = require('axios').default
const chalk = require('chalk')

// docs
/**
 * returns group logo url
 * @category group
 * @alias getlogo
 * @returns {string} image url
 * @param {number} groupid
 * @example const roxy = require('roxy.js')
 * const logo = await roxy.group.getlogo(5097136, 150, true)
**/

async function getlogo (groupid, size, circular) {
  const body = await axios.get(`https://thumbnails.roblox.com/v1/groups/icons?groupIds=${groupid}&size=${size || '150'}x${size || '150'}&format=Png&isCircular=${circular || 'false'}`)
  if (!body.status === 200 || !body.data.data || !body.data.data[0]) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red('group does not exist')}`)
  } else {
    return body.data.data[0].imageUrl
  }
}
module.exports = getlogo
