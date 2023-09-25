const http = require("node:http");


const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("NODE.JS http");
});

server.listen(3000,()=>{
    console.log('running server with port 3000');
});