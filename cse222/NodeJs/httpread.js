import http from "http";
import fs from "fs";
import EventEmitter from "events";

let fileevent = new EventEmitter();

fileevent.on("myFileEvent", (data, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    const items = JSON.parse(data); 

    res.end(`
        <h1>Items List</h1>
        <table border="1" cellpadding="10">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            ${items.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                </tr>
            `).join("")}
        </table>
        <br>
        <a href="/">Go Back</a>
    `);
});

let server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Click on the button to view the data</h1>
            <a href="/fetch">
                <button type="button">View Data</button>
            </a>
        `);
    } 
    else if (req.url === "/fetch") {

        fs.readFile("items.json", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>File not found</h1>");
            } else {
                
                fileevent.emit("myFileEvent", data, res);
            }
        });
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
