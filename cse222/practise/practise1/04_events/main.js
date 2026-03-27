import { EventEmitter } from "events";
let booking = new EventEmitter;
booking.on('booked',(user)=>{
    console.log(`booked email:- ${user}`); 
})
booking.on('booked',(user)=>{
    console.log(`booked ticket:- ${user}`); 
})
booking.on('booked',(user,seatType)=>{
    console.log(`booked email:- ${user,seatType}`); 
})

booking.emit('booked',"sampat","VIP");