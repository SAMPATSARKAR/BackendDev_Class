import mongoose from 'mongoose'
import express from 'express'
mongoose.connect("mongodb://localhost:27017/ecommerce");
const app = express();
const productSchema = new mongoose.Schema({
    name:String,
    price:Number
})
const product = mongoose.model('products',productSchema);
//API with pagination
app.get("/products",async(req,res)=>{
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 2;
    let skip = (page-1)*limit;
    let result = await product.find().skip(skip).limit(limit);
    res.send(result);
})
app.listen(3000);
//now to host , paste http://localhost:3000/ecommerce?page=1&limit=2 in the browser to see the result. Change the page number to see the next set of products.
