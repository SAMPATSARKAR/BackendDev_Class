import fs from 'fs'
import { finished } from 'stream';
let writeStream = fs.createWriteStream('sample2.txt',{encoding:'utf-8'});
let readStream = fs.createReadStream('sample2.txt',{encoding:'utf-8',start:0,end:7});
writeStream.write("Hello");
writeStream.end(()=>{
    console.log("finished writing");
    readStream.on('data',(chunk)=>{
        console.log(chunk);
        
    })
    
});
writeStream.on('finish',()=>{
    console.log("finished writing in the file");
    
});
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     console.log(chunk.length);
// })
// readStream.on('end',()=>{
//     console.log("Finished reading");
// })
// readStream.on('error',(err)=>{
//     console.log(err);
// })