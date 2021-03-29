const roxy = require('../../lib/index')
async function t () {
  console.log(await roxy.user.getidfromname('duixrix'))
}
t()
