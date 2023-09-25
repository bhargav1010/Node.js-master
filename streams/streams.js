const fs =require("node:fs");

let rStream = fs.createReadStream('Node.js-master/streams/data.txt');


let wStream =  fs.createWriteStream('Node.js-master/streams/data-1.txt');



rStream.on("data",(chunk)=>{
    console.log(chunk);
    wStream.write(chunk);
})

//with pipe:

rStream.pipe(wStream);