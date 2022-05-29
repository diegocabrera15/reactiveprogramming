import { asyncScheduler } from "rxjs";

//setTimeout(()=>{})
//setInterval(()=>{})

const sayHi = () => console.log("Hi everyone");
const sayHiName = name => console.log(`Hi ${name}`);

//Like a setTimeout
asyncScheduler.schedule(sayHi, 2000);
asyncScheduler.schedule(sayHiName, 2000, "Fernando");


//Like a setInterval
const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000)
},3000,0);


// setTimeout(() => {
//     subs.unsubscribe()
// }, 6000);

asyncScheduler.schedule(()=>subs.unsubscribe(),6000);