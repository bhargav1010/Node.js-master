// data=require('./data');

// console.log(data.getUserName());
// data.setUserName('RAM');
// console.log(data.getUserName());

// newdata=require('./data');

// console.log(data.getUserName());


//without caching

data = new users();



console.log(data.getUserName());
data.setUserName('RAM');
console.log(data.getUserName());

newdata=require('./data');

console.log(data.getUserName());