//Giving http core module file
const http=require('http');
//To Create a server
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    setTimeout(()=>{process.exit();},5000);//server will stop after 5 secs
})
//listening to server
server.listen(3500);



//code:1
const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    const url=req.url;
    
    if(url==='/'){
    // setTimeout(()=>{process.exit();},5000);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<title>HTML</title>');
    res.write('<head><h1>Click Get button to get Welcom page</h1></head>')
    res.write('<body><form action="/welcome_page" method="POST"><button type="submit">Get</button></form></body>');
    res.write('</html>');
    }
    if(url==='/welcome_page'){
        res.write('<html>');
        res.write('<head><h1>Welcome to Node.js</h1></head>')
        res.write('</html>');
        return res.end();
    }

})

server.listen(4200);