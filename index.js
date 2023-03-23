// const fs= require("fs");
// // fs.writeFileSync('read.text',"welcome to my World");
// // fs.writeFileSync('read.text',"welcome to my NodeJs");

// // Here if file is not present than genrate a file which is __filename.text and write constants. 
// // And if file is present and use again same file and write contant than nodeJs OVERWRITE the contant.

// // And if we want to not overwrite than use this method

// // fs.appendFileSync("read.text","Welcome to my World\n");
// // fs.appendFileSync("read.text","Welcome to my NodeJs");

// // Buffer use Nodejs

// const buf_data = fs.readFileSync("read.text");
// org_data = buf_data.toString();
// console.log(org_data);

//*********************************Async way**********************************************
//  const fs=require("fs");
//  fs.writeFile("read.text","Today is awesome day :)", (err)=>{
// console.log("file is created");
//  });

//  fs.readFile("read.text","utf-8",(err,data)=>{
//     console.log(data);
//  })

//*******************************OS MODULES***************************************
// const os =require("os");

// console.log(os.arch());
// // console.log(os.freemem());
// const freeMemory= os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);
// console.log(os.release());
// ************************************PATH modules in nodeJs***************************************************

// const path =require("path");
// console.log(path.dirname("index.js"));
// console.log(path.extname("index.js"));
// console.log(path.basename("index.js"));
// console.log(path.parse("index.js"));

//*************************npm models**************************************
const chalk = require('chalk');
console.log(chalk.magentaBright("Hello World"));
const validator =require("validator");
const res =validator.isEmail("aashishmishra@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
