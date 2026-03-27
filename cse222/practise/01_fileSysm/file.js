import fs from 'fs';
const path = '01_fileSysm/test.json';
let data = fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log("error occured");
        return;
    }
    let d = JSON.parse(data);//converts json into object
    console.log(d);
});
console.log("successfull");

// let data = fs.readFileSync(path,'utf-8');
// console.log(data);
// console.log("successfull");

// write file
// let path = 'output1.txt';
// let d = fs.writeFile(path,"i am the best",'utf-8',(err)=>{
//     if(err){
//         console.log("err");
//     }
//     console.log("file successfully written");
// })
// const path = 'output1.json';
// const content = {
//     "name":"sampat",
//     "Maths":"80",
//     "sec":"224PH"
// }
// let d = fs.writeFile(path,JSON.stringify(content,null,2),"utf-8",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("successfull"); 
// })
