const roxy = require('../../lib/index')
async function t () {
  console.log(await roxy.user.getblurb(1719166332))
}
t()
