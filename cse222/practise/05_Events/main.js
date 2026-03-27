import {EventEmitter} from 'events';// eventEmitter is a const export from the events module
const booking = new EventEmitter();
booking.on('booked',(user)=>{//event listner
    console.log(`Email sent to ${user}`);
})
booking.on('booked',(user)=>{
    console.log(`Ticket generated for ${user}`);
})
booking.on('booked',(user, seatType)=>{
    console.log(`Booking recorded in the sys for ${user}, ${seatType}`);
})
booking.emit('booked','Sampat','VIP')
// booking.emit('booked','Ekta','regular')
// booking.emit('booked','Raj','regular')
// booking.emit('booked','ram','VIP')