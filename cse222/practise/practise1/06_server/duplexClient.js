import { createConnection } from "net";
let client = createConnection({port:2000},()=>{
    console.log("connected on to server");
    
})
client.write("Hello from client");
client.on('data',(data)=>{
    console.log(data);
    client.end();
})
client.on('end',()=>{
    console.log("disconnected client");
    
})