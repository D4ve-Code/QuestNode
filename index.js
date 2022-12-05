// const userInfo = require('./information');
// var cowsay = require('cowsay');
// import * as cowsay from 'cowsay'
// let ouput: string = cowsay.say({text : 'Hello from typescript'});
// console.log(ouput);

// const name1 = 'David OVIEDO';
// const campus = 'FR Remote';

// import {IOptions} from "cowsay"
// let opts: IOptions={
//     name1="David OVIEDO";
//     e: 'FR REMOTE'
//     r: true
// };
// console.log(cowsay.say(opts));


const userInfo = require('./information');
var cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name1} and im in campus ${userInfo.campus}`,
    e : "oO",
    T : "U"
}));

