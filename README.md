<!-- inspired by noblox - rewrote but still gave credit <3 -->

<h1 align="center">
    <img src="https://raw.githubusercontent.com/colenh/roxy.js/main/docs_include/roxyjs-banner.png" alt="roxy.js" width="250"/>
    <br>
</h1>

<p align="center">
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-blue.svg?style=flat-square" alt="style"/></a>
    <a href="https://discord.gg/WK2qTecTkJ"><img src="https://img.shields.io/badge/discord-roxy.js-blue.svg?style=flat-square" alt="discord"></a>
    <a href="https://www.npmjs.com/package/roxy.js"><img src="https://img.shields.io/npm/v/roxy.js.svg?style=flat-square" alt="npm"></a>
    <a href="https://travis-ci.com/colenh/roxy.js"><img src="https://img.shields.io/travis/com/colenh/roxy.js?style=flat-square" alt="build"/></a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js?ref=badge_shield"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js.svg?type=shield" alt="license"></a>
    <a href="https://david-dm.org/colenh/roxy.js"><img src="https://status.david-dm.org/gh/colenh/roxy.js.svg?style=flat-square" alt="dependencies"></a>
    <a href="https://david-dm.org/colenh/roxy.js"><img src="https://img.shields.io/snyk/vulnerabilities/npm/roxy.js?style=flat-square" alt="vulnerabilities"></a>
</p>

## about

roxy.js is a roblox wrapper for node.js, our goal is to be as simple as possible. this package is heavily inspired by noblox.js. roxy.js is licensed under MIT

## install

```bash
# locally
    $ yarn add roxy.js
    $ npm install roxy.js --save

# globally
    $ yarn global add roxy.js
    $ npm install roxy.js -g
```

## example

```js
const roxy = require('roxy.js')
const client = new roxy.client()
async function init() {
    await client.initiate({cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890'})
}
```

## docs

to view api documentation, tutorials on how to get your cookie and more, visit: [roxy.js.org](https://roxy.js.org/)

## credits

* [cole](https://github.com/colenh) - lead maintainer
* [suufi](https://github.com/suufi) - inspiration, readme base, workflows & more
