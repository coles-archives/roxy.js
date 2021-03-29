const roxy = require('../../lib/index')
async function t () {
  console.log(await roxy.user.getnamefromid(1719166332))
}
t()
