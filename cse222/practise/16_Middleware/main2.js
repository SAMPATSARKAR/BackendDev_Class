import express from 'express';
const app = express();
const myLogger = (req,res,next)=>{
    console.log("before logged");
    console.log("before logged");
    next();
    
}
app.get('/',myLogger,(req,res)=>{//myLogger is used here for middleware
    console.log("welcome");
    res.send("welcome");
    
})
app.get('/home',(req,res)=>{
    console.log("this is home");
    res.send("This is home")
    
})
app.listen(3000);