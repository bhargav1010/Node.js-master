//Giving http core module file
const http=require('http');
//To Create a server
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    setTimeout(()=>{process.exit();},5000);//server will stop after 5 secs
})
//listening to server
server.listen(3500);



//code-1
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



//code-2

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    
    if(url==='/'){
    // setTimeout(()=>{process.exit();},5000);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<title>HTML</title>');
    res.write('<head><h1>Click Get button to get Welcom page</h1></head>')
    res.write('<body><form action="/data_sent_to_file" method="POST"><input type=text name=data><button type="submit">Send Data</button></form></body>');
    res.write('</html>');
    }
    if(url==='/data_sent_to_file' && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            data=parsedBody.split('=')[1];
            console.log(data);
            fs.writeFileSync('dataFile.txt',data);
        })
        res.write('<html>');
        res.write('<head><h1>Data Sent Successfully</h1></head>')
        res.write('</html>');
        return res.end();
    }

})

server.listen(4200);