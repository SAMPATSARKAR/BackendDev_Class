import express from 'express';
let app = express();
import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/ecommerce");
app.use(express.json());
let prioductSchema = mongoose.Schema({
    name:String,
    price:Number
})
let product = mongoose.model('products',prioductSchema);
app.post("/products", async(req,res)=>{
    try{
        let result = await product.insertOne(req.body);
        res.send("Product added successfully");
    } catch (error) {
        res.status(500).send("Error adding product");
    }
})
app.put("/products/:id", async(req,res)=>{
    return Promise.resolve()//immediately resolved becoz updateOne is already a promise
    .then(()=>{
        return product.updateOne({_id:req.params.id},{$set:{name:req.body.name,price:req.body.price}})          
    })
    .then((result)=>{
        res.send(`<p>Matched count: ${result.matchCount}</p>
        <p>Updated count: ${result.modifiedCount}</p>`)
    })
    .catch((error)=>{
        res.status(500).send("Error updating product");
    })
})
app.delete("/products/:id", async(req,res)=>{
    product.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.send(`<p>Deleted Count:${result.deletedCount}</p>`)
    })
    .catch((error)=>{
        res.status(500).send("Error deleting product");
    })
})
app.listen(3000);