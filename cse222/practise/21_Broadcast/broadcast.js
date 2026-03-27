import express from 'express'
let app = express();
import {createServer} from "http"
import { Server} from "socket.io"
import path from "path"
import {fileURLToPath} from 'url'
let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)
let http = createServer(app)
let io = new Server(http)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'broadcast.html'))
})
let clients = 0;
io.on("connection", (socket) => {
    clients++;
    socket.emit("newbroadcast",`Welcome,new client connected`);
    // io.emit("newbroadcast",`${clients} clients connected`);
    // console.log("Client connected");
    socket.broadcast.emit("newbroadcast",`A new client connected, ${clients} clients connected`);
    socket.on('disconnect',()=>{
        clients--;
        io.emit("newbroadcast",`${clients} clients connected`);
    })
    }, 2000);
http.listen(3000)