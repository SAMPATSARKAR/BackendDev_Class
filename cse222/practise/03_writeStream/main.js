import fs from 'fs';
const writeStream = fs.createWriteStream('final1.txt');

writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");
writeStream.write("Hello this is line1");

writeStream.end();
writeStream.on('end',()=>{
    console.log('All the data has been written to final.txt');
    
})

writeStream.on('error',()=>{
    console.error("Error in writing to file",err);
})