import express from 'express';
const app = express();
import userrouter from './userrouter.js';
app.use('/',userrouter)
app.listen(3000,()=>{
    console.log("server is running");
})
