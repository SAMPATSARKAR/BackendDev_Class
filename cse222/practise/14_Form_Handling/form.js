import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { body, validationResult } from 'express-validator';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'main.html'));
})
app.post('/submit',[
    body('name').notEmpty().withMessage(),
    body('email').notEmpty().withMessage()
],(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.send("please fill all the details correctly <a href ='/'>Go back</a>");
    }
    res.send(`<h2>success</h2><p>Name: ${req.body.name} Email: ${req.body.email}</p>`);
})
app.listen(3000,()=>{
    console.log("listening on 3000");
})