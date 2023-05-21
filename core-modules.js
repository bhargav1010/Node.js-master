
//path.......................................................
const path =require("node:path");

console.log('path:')//path gives relative path
console.log(path.join("path1","path2","path.html"));
console.log(path.join("/path1","/path2","path.html"));
console.log(path.join(__dirname,"path.html"));

console.log('resolve:')//resolve gives absolute path
console.log(path.resolve("path1","path2","path.html"));
console.log(path.resolve("/path1","/path2","path.html"));
console.log(path.resolve(__dirname,"path.html"));