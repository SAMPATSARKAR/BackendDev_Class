import {EventEmitter} from 'events';
let myEmitter = new EventEmitter();


myEmitter.setMaxListeners(30)
let max = myEmitter.getMaxListeners();
console.log(max);

for (let i=0;i<25;i++) {
    myEmitter.on("myEvent",()=>{
        console.log(`Listner no. ${i} called.`);    
    })
}

myEmitter.emit("myEvent");