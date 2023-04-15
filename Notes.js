//Giving http core module file
const http=require('http');
//To Create a server
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    setTimeout(()=>{process.exit();},5000);//server will stop after 5 secs
})
//listening to server
server.listen(3500);