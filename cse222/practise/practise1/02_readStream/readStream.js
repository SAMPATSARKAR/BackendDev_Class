import fs from 'fs';
let readStream = fs.createReadStream('final.txt',{encoding:'utf-8',start:0,end:23});
readStream.on('data',(data)=>{
    console.log(data);
    
}) 
readStream.on('end',()=>{
    console.log("finished reading");
})
readStream.on('error',(err)=>{
    console.error(err);
})
