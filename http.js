const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<p>Welcome to our home page </p>');
        return; 
    }
    if (req.url === '/about') {
        let b =0;
        res.end(`<p> our short history  ${i} </p>`);
       
        for(let i =0; i<100; i++){
            b =i;
        }
        return; 
    }
    res.end(`<p> Oops can't find the page you requested</p>
        <a href="/"> back home </a>
    `);
});

server.listen(3000);
