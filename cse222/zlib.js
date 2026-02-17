import zlib, { gunzip } from 'zlib';
let data = "I want a pizza";
zlib.gzip(data,(err,buffer)=>{
    if(err){
        console.log("err ",err);
        
    }else{
        console.log("Compressed data",buffer.toString());
        zlib.gunzip(buffer,(err,data)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log("Decompressed data: ",data.toString());
                
            }
        })
    }
})