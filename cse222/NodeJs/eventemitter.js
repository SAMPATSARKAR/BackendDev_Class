import {EventEmitter} from 'events'
const booking = new EventEmitter();

booking.on("newbooking", (user)=>{
    console.log(`Ticket Generated for user: ${user}`);
})

booking.on("newbooking", (user)=>{
    console.log(`Email Sent to user: ${user}`);
})

booking.on("newbooking", (user,seattype)=>{
    console.log(`Booking recorded as: ${user} - ${seattype}`);
})

booking.emit('newbooking',"Ankit", "VIP");