import {EventEmitter} from 'events';
let myEmitter = new EventEmitter()

function myListner() {
    console.log(`Hello there`);
}

myEmitter.on("myEvent",myListner)
setInterval(() => {
    myEmitter.emit("myEvent")
}, 2000);

setTimeout(() => {
    myEmitter.removeListener("myEvent", myListner)
    console.log("listner removed");
    
}, 10000);
