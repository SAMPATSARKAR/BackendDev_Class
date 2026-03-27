import {createServer} from 'net';
const server = createServer((socket)=>{
    console.log("client connected");

    socket.on('data',(data)=>{
        console.log("Received", data.toString());
        socket.write("Hello from server");
        
    })
    socket.on('end',()=>{
        console.log("client disconnected");
        
    })
})
server.listen(2000,()=>{
    console.log("server is listening on port 2000");
    
})
