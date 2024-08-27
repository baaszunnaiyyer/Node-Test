//npm - global command, comes wiht node
//npm --version

//local dependency - use it only in this particular project
//npm i <packagename>

//global dependency - use it any project
//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)

//package.jason - Mainifest the file (stores important informationsab about project/package)
//manual approch (create package.json in the root, create properties)
//npm init (step by step process)
// npm init -y (fills in the defualt values)


const fs = require('lodash')

const item = [1,[2 , [3, [4]]]]
const fixeditem = fs.flattenDeep(item)
console.log(fixeditem);
console.log('This is the fixed Item');


