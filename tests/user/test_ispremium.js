const roxy = require('../../lib/index')
async function t () {
  console.log(await roxy.user.ispremium(1719166332))
}
t()
