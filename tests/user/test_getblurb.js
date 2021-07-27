const roxy = require('../../lib/index')
async function t () {
  await roxy.user.getBlurb(1719166332)
}
t()

class index