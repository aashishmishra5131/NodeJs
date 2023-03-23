// const oper=require('./main');

// console.log(add(9,7));
// console.log(oper);
// console.log(oper.add(56,45));
// console.log(oper.sub(47,21));
const chalk=require('chalk');
const {add,sub,name}=require('./main');
console.log(add(56,45));
console.log(sub(47,21));
console.log(chalk.red(name));