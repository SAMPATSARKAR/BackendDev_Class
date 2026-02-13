import http from "http";
import FileSystem from "fs";

let server =  http.createServer((req, res) => {
    FileSystem.readFile("sample.txt", (err, data) => {
        if(err) {
            console.log(`${err}`);
        }else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(`${data}`)
            res.end(data);
        }
    })
})
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})