const pizzaShop = require("./sample-1");
const pizzaEvent = new pizzaShop();

pizzaEvent.on('done',()=>{
    console.log(`completed orders`);
})


pizzaEvent.order(6);



