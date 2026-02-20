import fs from 'fs';
import zlib from 'zlib';

let r = fs.createReadStream('cse222/sample.txt');
let w = fs.createWriteStream('cse222/sample.txt.gz');

let gzip = zlib.createGzip();

r.pipe(gzip).pipe(w);

w.on('finish', () => {
    console.log("File compressed successfully.");

    let r2 = fs.createReadStream('cse222/sample.txt.gz');
    let w2 = fs.createWriteStream('cse222/sample_uncompressed.txt');

    let gunzip = zlib.createGunzip();

    r2.pipe(gunzip).pipe(w2);

    w2.on('finish', () => {
        console.log("File decompressed successfully.");
    });
});