import {gzip,gunzip} from 'zlib';
const data = "this is a nodejs file"
gzip(data,(err,buffer)=>{
    if(err){
        return console.log(err);
    }
    console.log(buffer.toString());
    gunzip(buffer,(err,buffer)=>{
        console.log(buffer.toString('utf-8'));
        
    })
})