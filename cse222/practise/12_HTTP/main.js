import http from 'http';
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    console.log("New request");
    res.write("Hello from NodeJs");
    res.end();//end the res and send the message
})
server.listen(2000,()=>{
    console.log("listening at port 2000");
    
})
// import fs from 'fs';
// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         const logmsg = `Request received on ${new Date().toLocaleString()}\n`
//         fs.appendFile('log.txt', logmsg,(err)=>{
//             if(err){
//                 console.log("Error writing the file");
                
//             }else{
//                 console.log("Log written into the file");
                
//             }
//         })
//         res.writeHead(200,{'content-type':'text/html'});
//         res.end('<h1 style=color:red>Home page</h1>');
//     }else if(req.url == "/about"){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end("About Page")
//     }else if(req.url == "/contact"){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end('contact page');
//     }else{
//         res.writeHead(404);
//         res.end("Not found")
//     }
// })
// server.listen(2000,()=>{
//     console.log("Running");
    
// })