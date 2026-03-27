import http from 'http';
import { createReadStream } from 'fs';
const server = http.createServer((req,res)=>{
    let filename ;
    if(req.url === '/'){
        filename='main.html'
    }else if(req.url === '/contact'){
        filename='contact.html';
    }else if(req.url === "/about"){
        filename='about.html'
    }else{
        res.writeHead(404,{"Content-Type":"plain/html"});
        res.end("<h1>Error 404 not found</h1>");
        return;

    }
    const readStream = createReadStream(filename);
    res.writeHead(200,{'content-Type':"text/html"});
    readStream.pipe(res);
    readStream.on("error",()=>{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>Error 404 not found</h1>");
        return;
    })
});
server.listen(3000,()=>{
    console.log("Listening on port 3000");
    
})