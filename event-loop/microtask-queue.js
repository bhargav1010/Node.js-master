//Microtask queue has high priority than macrotask queue.
//Microtask queue -> nexttick[Node.js specific] and promise.
//NOTE: nextTick queue has high priority than promise.

process.nextTick(()=>{
    console.log('nextTick');
});

Promise.resolve().then(()=>{console.log('promise')});

setTimeout(()=>{console.log('callback')});