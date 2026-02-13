// import fs from 'fs';

// let data = "Hello World"

// fs.writeFile('test.txt',data, (err)=>{
//     if (err) {
//         console.log(`Error in writing a file ${err}`);
//     } else {
//         console.log('contents written into the file');
        
//         fs.readFile('test.txt', (err,data)=>{
//             if(err) {
//                 console.log(`Error reading the file ${err}`);
//             } else {
//                 console.log(`Content of the file is: ${data}`);
                
//             }
//         })
//     }
// })


import fs from 'fs'

const student = {
    name: 'Ankit',
    marks: 65,
    email: 'ankit@gmail.com'
}

fs.writeFile('student.json',JSON.stringify(student, null, 5),(err)=>{
    if(err) {
        console.log(`Error ${err}`);
        
    } else {
        console.log("Contents added");
    }

    let dataread = fs.readFileSync("student.json",'utf-8')
    let parsedData = JSON.parse(dataread);
    console.log("Content of the file", parsedData);
    
    
})
