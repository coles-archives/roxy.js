<h1 align="center">
    <img src="https://raw.githubusercontent.com/colenh/roxy.js/main/img/roxyjs.png" alt="roxy.js" width="250"/>
    <br>
</h1>

<h4 align="center">a simple node wrapper for roblox.</h4>

<p align="center">
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-blue.svg?style=flat-square" alt="style"/></a>
    <a href="https://discord.gg/WK2qTecTkJ"><img src="https://img.shields.io/badge/discord-roxy.js-blue.svg?style=flat-square" alt="discord"></a>
    <a href="https://www.npmjs.com/package/roxy.js"><img src="https://img.shields.io/npm/v/roxy.js.svg?style=flat-square" alt="npm"></a>
    <a href="https://travis-ci.com/colenh/roxy.js"><img src="https://img.shields.io/travis/colenh/roxy.js/master.svg?style=flat-square" alt="build"/></a></a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js?ref=badge_shield"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js.svg?type=shield?style=flat-square" alt="license"></a>
    <a href="https://david-dm.org/colenh/roxy.js"><img src="https://status.david-dm.org/gh/colenh/roxy.js.svg?style=flat-square" alt="dependencies"></a>
</p>

<p align="center">
  <a href="#about">about</a> •
  <a href="#install">install</a> •
  <a href="#docs">docs</a> •
  <a href="#credits">credits</a> •
  <a href="#license">license</a>
</p>

## about

roxy.js is a node module to interact with the roblox website via node.js. it is heavily inspired by noblox.js and bloxy but with simplicity in mind. <3

## install

run the following in your terminal:
```bash
# locally
    $ npm install roxy.js --save
    $ yarn add roxy.js

# globally
    $ npm install roxy.js -g
    $ yarn global add roxy.js
```

## docs

you can find our current docs at [roxy.js.org](https://roxy.js.org/)
    
## getting your cookie (chrome):

1. open roblox page and login to chosen account
2. press `Control + Shift + i` on your keyboard or right click and click inspect
3. click `Application`
4. find `.ROBLOSECURITY` and copy
5. put this full token into client.init: `client.init({ cookie: '_|WARNING:-DO'})`
    
## example

```js
const roxy = require('roxy.js')
const client = new roxy.client()
async function init() {
    await client.init({cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890'})
}
```

## credits

* [cole](https://github.com/coleiscoolig) - lead maintainer
* [suufi](https://github.com/suufi) & [visualizememe](https://github.com/visualizememe) - inspiration
* [suufi](https://github.com/suufi) - readme base

## License

MIT
