const EventEmitter=require("node:events");

const emitter = new EventEmitter();

emitter.on('start',()=>{
    console.log('Finished 5 secs');
})

setTimeout(()=>{
    emitter.emit('start');
},5000);

