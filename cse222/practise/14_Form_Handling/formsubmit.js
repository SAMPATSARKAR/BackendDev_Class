import express from 'express';
const app = new express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'main.html'));
})
app.post('/submit',(req,res)=>{
    const {username,email}=req.body;
    res.send(`
    <h1>Form submitted</h1>
    Name: ${username}<br>
    Email:${email}
    `)
})
app.listen(3000, ()=>{
    console.log("server is running");
    
})