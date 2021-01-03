const chalk = require('chalk');
 
console.log(chalk.green.bold('Hello world!'));
const log=console.log
log(chalk.blue.inverse('Hello') + ' World' + chalk.red('!'));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);