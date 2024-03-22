const os = require('os')

const info = os.userInfo()

console.log(info)

//check uptime 

console.log(`system uptime is ${os.uptime()} seconds`)
const infos ={
    name: os.type(), 
    relase: os.release(), 
    totalmemory: os.totalmem(), 
    freememory: os.freemem(),
}

console.log(infos)