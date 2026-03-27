import express from 'express';
let router = express.Router();
router.get("/food",(req,res)=>{
    res.send("Welcome to the food page");
})
router.get("/food/pizza",(req,res)=>{
    res.send("Welcome to the pizza page");
})
router.get("/food/burger",(req,res)=>{
    res.send("Welcome to the burger page");
})
router.get("/order",(req,res)=>{
    res.send("order your food here");
})
export default router;