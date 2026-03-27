import express from 'express';
const app = express();
var authentication = function(req,res,next){
    if(req.query.admin === 'true'){
        let admin=true;
        next();
    }else{
        res.send("no auth");
    }
}
app.get('/user',authentication,function(req,res){
    console.log("hello world");
    res.send("hello world");

})
app.listen(3000);