import http from 'http'
import FileSystem from 'fs'
let server = http.createServer((req, res) => {
    if(req.url === "/home") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1 style='color: blue;'>Home Page</h1>");
    }else if(req.url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1 style='color: green;'>About Page</h1>");
    }else if(req.url === "/products") {
        FileSystem.readFile("sample.txt", (err, data) => {
                if(err) {
                    console.log(`${err}`);
                }else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(`<pre style="color: blue;">${data}</pre>`);
                    res.end();
                }
            })
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<p style='color: red;'>Page Not Found</p>");
    }
})
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})