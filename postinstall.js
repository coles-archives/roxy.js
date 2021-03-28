// packages
const chalk = require('chalk');
const figlet = require('figlet');

// brand
console.log(figlet.textSync('roxy.js', {
	font: 'Big',
	horizontalLayout: 'default',
	verticalLayout: 'default',
}));

// text
console.log(`
	${chalk.underline('roxy.js installed <3')}
	${chalk.bold('docs:')} https://roxy.js.org/ 
	${chalk.bold('github:')} https://github.com/colenh/roxy.js
	${chalk.bold('discord:')} https://discord.gg/WK2qTecTkJ
	${chalk.bold.red('be aware that roblox silently changes their endpoints frequently. https://devforum.roblox.com/t/introduce-change-logs-to-roblox-api-endpoints/524783')}
`);