const http = require("node:http");

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url=="/login-page"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end('<h1>Login Page</h1>');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>Page Not Found</h1>')
    }
});

server.listen(4003,()=>{console.log('Running route server at 4003')})

server.close(()=>{})