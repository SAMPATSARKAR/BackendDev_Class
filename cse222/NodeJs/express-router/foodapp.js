import express from 'express';
let app = express();
import foodroutes from './foodroutes.js';
app.use(foodroutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})