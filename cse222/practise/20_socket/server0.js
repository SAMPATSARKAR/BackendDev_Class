import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
const app = express();
const http=createServer(app);
const io = new Server(http);
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'main.html'));
})
io.on('connection',(socket)=>{
    console.log("client is connected");
    socket.emit('message','Hello from server');
    socket.on('message',(data)=>{
        console.log("Message from client: ", data);
    });
    socket.on('disconnect  ',()=>{
        console.log("client is disconnected");
    });
});
http.listen(3000,()=>{
    console.log("server is running on port 3000"); 
})

//using socket.io , send a msg"hey client" from server to the client after every 2 sec. At the 10th second , the server must stop sending msg to the client.