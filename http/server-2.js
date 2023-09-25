const http=require("node:http");

data={
    "name":"Krisha","location":"vrindhavan"
}
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type": "application/json"});
    res.end(JSON.stringify(data));
})

server.listen(4002);