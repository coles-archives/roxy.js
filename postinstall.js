// inspired by noblox.js / rewrote by colenh

// imports
const chalk = require('chalk')
const figlet = require('figlet')

// text
figlet('roxy.js', function (err, text) {
  if (err) {
    console.error(`${chalk.yellow(chalk.bold('roxy.js error:'))} ${chalk.red(`postinstall file error - figlet error: ${err}`)}`)
    return
  }
  console.log(chalk.yellow(text + '\n'))
})

// about & stuff
console.log('roxy.js has been installed! 🎉')
console.log('📗 read our docs at: ' + chalk.blue('https://roxy.js.org/'))
console.log('📞 for support, join our discord: ' + chalk.blue('https://discord.gg/WK2qTecTkJ'))
console.log('🐱 find a bug? want to request a feature? visit our github: ' + chalk.blue('https://github.com/colenh/roxy.js'))
console.log(chalk.redBright('as noblox.js and bloxy state, roblox does change their api endpoints out of the blue: https://devforum.roblox.com/t/introduce-change-logs-to-roblox-api-endpoints/524783'))
