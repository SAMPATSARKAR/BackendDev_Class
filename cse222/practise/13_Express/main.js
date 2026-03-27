import express from 'express';
const app = new express;
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.listen(3000,()=>{
    console.log("listening on 3000");
    
})