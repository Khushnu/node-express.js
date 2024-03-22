const {readFile}= require('fs'); 

const getText =(path)=> {
    return  new Promise((resolve, reject) => {
        readFile('./sum.js', 'utf8', (err,data )=>{
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
            
        })
    })
}

getText('./sum.js').then((data)=> console.log(data)).catch((err)=> console.log(err)); 