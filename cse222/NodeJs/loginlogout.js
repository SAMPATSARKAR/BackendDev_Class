import express from 'express'
let app = express();
import session from 'express-session';
app.use(session({
    secret:"mysession",
    resave:false,
    saveUninitialized:false
}));
app.use(express.urlencoded({extended:true}));

app.get("/login",(req,res)=>{
    res.send(`
        <form action="/dashboard" method="post">
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>`
        );
})
app.post("/dashboard",(req,res)=>{
    let {username,password} = req.body;
    req.session.user={username: username,password: password};
    if(req.session.user){
        res.send(`
            <h3>Welcome to the dashboard, ${req.session.user.username}</h3>
            <button><a href="/logout">Logout</a></button>
        `);

    }else{
        res.send(`please login first`);
    }
})
app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error on logging out");
            
        }else{
            console.log("logout successful");
            res.redirect("/login");
        }
    })
})
//get method for dashboard to check if user is logged in or not
app.get("/dashboard",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error on logging out");
            
        }else{
            console.log("logout successful");
            res.redirect("/login");
        }
    })
})
app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
    
})