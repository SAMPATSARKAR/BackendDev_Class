import { EventEmitter } from 'events'
const cgpa = new EventEmitter();

cgpa.on('newresult',(name,m1,m2,m3,m4,m5)=>{
    console.log("Student Name:", name, "Percentage", (m1+m2+m3+m4+m5)/5);
})

cgpa.emit('newresult','Ankit',90,85,88,92,87);