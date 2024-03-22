//Modules 

//creating promise 

//events 
const express = require('express');
const path = require('path');
const app = express(); 
const authorize = require('./authorize')
const {product, people} = require('./data');
const logger = require('./logger')
const morgan = require('morgan');
const { stringify } = require('querystring');
// app.use([logger, authorize])
app.use(express.static('./method-public'))
// app.use(morgan('tiny'))
app.get('/api/people',(req, res)=>{
   res.status(200).json({success:true, data:people})
})
//parse the form data where we want to access the data of form 
app.use(express.urlencoded({extended:false}))
app.post('/login', (req, res)=>{
   const {name} = req.body; 
   if(name){
    return res.status(200).send(`Welcome ${name}`)
   } 
   res.status(400).send(`<a href="/"> Please Provide Credientials</a>`)
})

app.listen(3000, ()=>{
    console.log('listening to server...')
});
//setup static and middleware
// app.use(express.static('./public'));

// app.get('/',(req,res)=>{
// res.send('<p>Home Page</p><a href="/api/product/:orderID">Product page </a> ')
// })

// app.get('/api/v1/query',(req, res)=>{
//     const {searchQuer, limit} = req.query
//     let sortedProduct = [...product];
//     if(searchQuer){
//         sortedProduct = sortedProduct.filter((p)=> p.title.startsWith(searchQuer));
//     }
//     if(limit){
//         sortedProduct = sortedProduct.slice(0, Number(limit))

//     } 
//     if(sortedProduct.length < 1){
//         return res.status(200).json({'message':"no data found "})
//     }
//     const responseData = {
//         products: sortedProduct,
//         message: 'Hello World'
//     };
//     res.status(200).json(sortedProduct);
//     res.send('Hello World');
//     console.log(req.query);

// })


// app.get('/api/product/:orderID',(req, res)=>{
//     const {orderID} = req.params;
//     const singleProduct = product.find((pro)=>
//         pro.order === Number(orderID)
//     )
//     // tp check if producnt didnt find then it show some message 

//     if(!singleProduct){
//         return res.status(404).send('Product doesnot exist ')
//     }
//     const newProduct= product.map((pro)=> 
//     {
//         const {id, order, duties} = pro; 
//         return {id, order, duties}
//     })
//     res.json(singleProduct);
// })

// app.get('/',(req, res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar/index.html'));
// })
// app.all('*', (req,res)=> {
//     res.status(404).send('<h1>Resource not found</h1>')
// })


// const http = require('http');
// const data = [
//     "<h1> Home Page</h1>",
//     "<h2> About Page</h2>",
//      "<p> Home Page</p>",
//      "<h1> Home Page</h1>",
// ]
   

// let t = "";
// const server = http.createServer((res, req)=>{
//     req.writeHead(200, {"content-type":"text/html"})
//     for(let i =0; i < data.length; i++){
//         t = data[i];
//         req.write(t)
//     }
    
//     req.end()
// })

// server.listen(3000, ()=>{
//     console.log('Server started and listening at http://localhost:3000/ .....')
// });

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('<p>Welcome to our home page </p>');
//         return; 
//     }
//     if (req.url === '/about') {
//         let b =0;
//         res.end(`<p> our short history  ${b} </p>`);
       
//         for(let i =0; i<100; i++){
//           console.log(i);
//         }
       
//         return; 
//     }
//     res.end(`<p> Oops can't find the page you requested</p>
//         <a href="/"> back home </a>
//     `);
// });

// server.listen(3000);

// console.log('first task'); 

// setTimeout(()=>{
//     console.log('finished second task');
// }, 0);

// console.log('3rd task');

// const _ = require('lodash');

// const items = [1,[3,[4,[5,6,[]]]]]; 

// const newarray = _.flattenDeep(items);

// console.log(newarray);

// console.log('hy')
// console.log('hy')

//aother way is const {jhon, name} = require('./)
// const names = require('./otherdata')
// const data = require('./alternate')
//here i didnt assign it any variable i just assign it and it works
// require('./sum')
// console.log(data)
// const setName=(name)=>{
//     console.log(`hey ${name}`)
// }

// setName('waleed')
// setName(names.jhon)
// console.log(names)