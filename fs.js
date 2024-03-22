//file system module 

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./app.js', 'utf8')

// console.log(first)

writeFileSync(
    './result.text', 
    `the text is here : ${first}`, 

)

