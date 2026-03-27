import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("Client connected");

    let count = 0;

    const interval = setInterval(() => {
        count++;
        socket.emit("message", "hey client");
        console.log("Message sent");

        if (count === 5) {
            clearInterval(interval);
            console.log("Stopped sending messages");
        }

    }, 2000);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});