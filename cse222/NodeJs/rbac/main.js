import express from 'express';
let app = express();
let users={
    sampat:{role:"admin"},
    raj:{role:"teacher"},
    ekta:{role:"student"}
}

let permission={
    admin:["dashboard","profile","bills"],
    teacher:["dashboard","profile"],
    student:["profile"]
}

let getusers = (req,res,next)=>{
    let username=req.query.username;
    if(!username || !users[username]){
        return res.send("Not providing correct username");
    }
    req.user = users[username];
    next();
}
app.use(getusers);

let checkaccess = (page)=>{
    return (req,res,next)=>{
        let userRole = req.user.role;
        if (permission[userRole].includes(page)){
            next();
        }else{
            res.send("Access Denied");
        }
    }
}
app.get("/dashboard",checkaccess("dashboard"),(req,res)=>{
    res.send("Welcome to dashboard")
})
app.get("/profile",checkaccess("profile"),(req,res)=>{
    res.send("Welcome to profile")
})
app.get("/bills",checkaccess("bills"),(req,res)=>{
    res.send("Welcome to bills")
})
app.listen(3000);