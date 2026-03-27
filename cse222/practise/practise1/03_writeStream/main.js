import fs from 'fs';
let writeStream = fs.createWriteStream('output.txt');
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");
writeStream.write("Hello i am sampat");

writeStream.end();
writeStream.on('end',()=>{
    console.log("succ written");
    
})
writeStream.on('error',()=>{
    console.error("error");
    
})