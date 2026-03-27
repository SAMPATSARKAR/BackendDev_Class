import fs from 'fs';
const filepath = 'test.json';
fs.readFile(filepath,'utf-8',(err,data)=>{
    if(err){
        console.log("Error occured");
    }else{
        console.log(data);
    }
    const data1 = JSON.parse(data);
    console.log(data1);
})



// import fs from 'fs';
// const filepath = 'output.json';
// const content = {
//     "name":"nodeJs",
//     "code":"int222"
// };
// fs.writeFile(filepath,JSON.stringify(content,null,2),'utf8',(err)=>{
//     if(err){
//         console.log("Error occured");
        
//     }
//     console.log("file content written successfully");
    
// })