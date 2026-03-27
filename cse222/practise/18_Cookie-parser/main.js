import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie('course','node js').send("The cookie has been set");
    console.log('Cookie',req.cookies);
})
app.get('/clear',(req,res)=>{
    res.clearCookie('course');
    res.send('Cookie cleared');
})
app.listen(3000);