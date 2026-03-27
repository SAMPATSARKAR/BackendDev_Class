import { createServer } from "net";
let server = createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data.toString());
        socket.write("Hello from server");
    })
    socket.on('end',()=>{
        console.log("disconnected server");
        
    })
})
server.listen(2000,()=>{
    console.log("listening in port 2000");
    
});