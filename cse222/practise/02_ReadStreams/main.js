import {createReadStream} from 'fs';
const readStream = createReadStream('practise/02_ReadStreams/test.txt',{encoding:'utf-8',start:0,end:23});

readStream.on('data',(chunk)=>{
    console.log("Received chunk\n",chunk);
})
readStream.on('end',()=>{
    console.log("finished reading the file");
    
});
readStream.on('error',(err)=>{
    console.error("Error in reading the file",err);
})