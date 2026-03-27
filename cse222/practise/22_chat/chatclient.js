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
    res.sendFile(path.join(__dirname,'chatclient.html'))
})
io.on("connection", (socket) => {
    console.log("User connected");
    
    socket.on("chat", (data) => {
        console.log("Message recieved",data);
        
        io.emit("chat", data);
    })
    });
http.listen(3000)