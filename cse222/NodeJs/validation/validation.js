import express from 'express';
let app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { body , validationResult } from 'express-validator';
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form_validation.html"));
})
app.post("/submit",[
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters")
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let errorMessages = errors.array().map((err)=>`<li>${err.msg}</li>`).join("");
        res.send(
            `<h3>Form could not be submitted</h3>
            ${errorMessages}`
        )
    }else{

        res.send(`Form submitted: ${req.body.username}, Email: ${req.body.email}`);
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})