

const chalk=require('chalk');

var validator = require('validator');
 // checks a valid email id
const a=validator.isEmail('chauhandheeraj1710@gmail.com'); //=> true
if (a){
    console.log(chalk.underline.green.inverse(a));
}
else{
    console.log(chalk.red.inverse(a));

}
// or use terniary operator