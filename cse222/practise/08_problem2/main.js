import fs from 'fs';
let readStream = fs.createReadStream('input.txt');
let writeStream = fs.createWriteStream('write.txt');
readStream.pipe(writeStream);
writeStream.on('finish',()=>{
    console.error("finished");
    
})