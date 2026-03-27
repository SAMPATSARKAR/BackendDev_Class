import express from 'express'
let app =express()
import jwt from 'jsonwebtoken'
app.use(express.json())
let SECRET = "key123"

app.post("/login",(req,res)=>{
    let {username,password} = req.body
    if(username == "sampat" && password == "sampat123"){
        let token = jwt.sign({username:"sampat"},SECRET,{expiresIn:"1m"})
        res.send(token)
    }else{
        res.send("Invalid credentials")
    }
})
app.get("/dashboard",(req,res)=>{
    let authHeader = req.headers.authorization
    if(!authHeader){
        res.send("Token is not provided")
        return
    }
    let token = authHeader.split(" ")[1]

    jwt.verify(token,SECRET,(ERR)=>{
    if(ERR){
        return res.send("Token is invalid");
        
    }else{
        return res.send("Welcome to the dashboard")
    }
})
})
app.listen(3000)