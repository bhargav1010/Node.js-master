//sync callbacks -> Executed immediately.....

let num=[1,2,3,4,5,6,7,8];
console.log(num.map(n=>n/2));
console.log(num.filter(n=>n+100));
console.log(num.reduce((a,b)=>{return a+b},100))

function addWith_100(n){
    console.log(n+100);
}
function number_5(addWith_100)
{
    const num=5;
    addWith_100(5);
}
number_5(addWith_100);


//async callbacks -> Execution deferred to later point in time

function callback(){
    document.getElementById("id-1").innerHTML="From event listener"
}

document.getElementById("btn").addEventListener("click",callback)
