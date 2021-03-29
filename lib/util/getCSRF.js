const axios = require('axios').default

function getCSRF (cookie) {
  return axios({
    method: 'post',
    url: 'https://auth.roblox.com/v2/logout',
    headers: {
      'Content-Type': 'application/json',
      Cookie: '.ROBLOSECURITY=' + cookie
    }
  })
    .then(function (response) {
      return response.headers['x-csrf-token']
    })
    .catch(function (error) {
      return error.response.headers['x-csrf-token']
    })
}

module.exports = getCSRF
