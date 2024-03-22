const logger =(req, res, next)=>{
    const method = req.method;
    const url = req.url; 
    const date = new Date().getDate(); 

    console.log(method, url, date); 
    // res.send('Middel ware');
    next();
}

module.exports = logger;