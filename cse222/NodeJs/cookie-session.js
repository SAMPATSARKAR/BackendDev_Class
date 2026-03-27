import express from 'express'
import cokkieSession from 'cookie-session'

let app = express();
app.use(cookieSession({
    name:"mynewsession",
    keys:["key1","key2"],
}));

app.get("/login",(req,res)=>{
    req.session.username="sampat";
    res.redirect("/dashboard");
})
app.get("/dashboard",(req,res)=>{
    if(req.session.username){
        res.send(`Welcome ${req.session.username}`);
    }else{
        res.send('PLEASE LOGIN FIRST');
    }
});
app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
    
})