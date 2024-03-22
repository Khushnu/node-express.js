const {readFile, writeFile} = require('fs')


readFile('./app.js','utf8', 
(err,result)=>{
if(err){
    console.log('error')
    return 
} 
writeFile('./result.js', result, (err, result)=>{
    if(err){
        console.log(`error : ${err}`)
        return 
    }
    console.log(result)

})
console.log(result)
})


//async 
