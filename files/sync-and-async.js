const fs = require("node:fs");

fs.writeFileSync("files/mytxt",'Hare Krishna Hare Krishna Hare Krishna');

console.log('SYNC:-----')
console.log('start');
let content=fs.readFileSync("files/mytxt");
console.log(content.toString());
console.log('end');


console.log('ASYNC:-----');
console.log('start');
fs.readFile("files/mytxt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
});
console.log('end');




