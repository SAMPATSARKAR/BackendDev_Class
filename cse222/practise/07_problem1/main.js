import fs, { createReadStream,createWriteStream } from 'fs';
let writeStream = fs.createWriteStream('write.txt',{encoding:'utf-8'});
writeStream.write("hello i am sampat");
writeStream.end();
writeStream.on('finish',()=>{
    console.log("written successfully inside write.txt");
    let readStream = fs.createReadStream('write.txt',{encoding:'utf-8'});
    readStream.on('data',(chunk)=>{
        console.log(chunk);
    })
    readStream.on('end',()=>{
        console.log("ended reading");
        
    })
    readStream.on('error',()=>{
        console.log("error read stream");
        
    })
})
writeStream.on('error',()=>{
    console.error("error write stream");
    
})