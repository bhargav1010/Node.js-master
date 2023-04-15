const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    setTimeout(()=>{process.exit();},5000);
})

server.listen(3500);