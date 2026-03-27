import express from 'express'
let app = express();
import session from 'express-session';
app.use(session({
    secret:"mysession",
    resave:false,
    saveUninitialized:false
}));
app.get("/login",(req,res)=>{
    req.session.user="sampat";
    req.session.email="sampat@example.com";
    res.redirect("/dashboard");
})
app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome to the dashboard, ${req.seesion.user.username}`);

    }else{
        res.send(`please login first`);
    }
})
app.get("/logout",(res,req)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error on logging out");
            
        }else{
            console.log("logout successful");
            
        }
    })
})