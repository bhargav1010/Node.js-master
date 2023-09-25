const EventEmitter=require("node:events");
class pizza extends EventEmitter{
    constructor(){
        super();
    }

    order(number)
    {
        for (let i = 1; i <number; i++) {
            setTimeout(() => {
                if(i==1){
                    console.log(`delivered ${i}st order`);
                }
                if(i>1){
                    console.log(`delivered ${i}nd order`);
                }
                if(i==5){
                    this.emit('done')
                }
          },2000*i);
        }
    } 
}

module.exports=pizza;