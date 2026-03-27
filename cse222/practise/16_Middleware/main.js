import express from 'express';
const app = express();
const mylog = (req,res,next)=>{
    console.log('logged before');
    next();
    console.log('logged after');
    
}
app.get('/',(req,res)=>{
    console.log("welcome home");
    res.send("welcome home")
    
})
app.use(mylog);
app.get('/about',(req,res)=>{
    console.log("welcome about");
    res.send("welcome about")
    
})
app.listen(3000,()=>{
    console.log("listening on 3000");
    
})