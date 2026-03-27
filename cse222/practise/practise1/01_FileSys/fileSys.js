import fs from 'fs';
// let data = fs.readFile('practise/sample.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(data);
//     }
// })

// let data = fs.readFile('practise/p.json','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     let d = JSON.parse(data);
//     console.log(d);
// })


///////////////////////////
const content = {
    "name":"sampat",
    "marks":100
}
let data = fs.writeFile('practise1/write.json',JSON.stringify(content,null,2),'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("successfull");
})