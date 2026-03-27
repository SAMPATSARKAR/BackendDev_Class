// const myPromise = new Promise((resolve,reject)=>{
//     const success = false;//try changing this to false
//     if(success){
//         resolve("task resolved successfully");
//     }else{
//         reject("task rejected");
//     }

// });
// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });


// let x = 10;
// let y = 20;
// let result = x+y;
// async function fetchalldata(){
//     let fetchdata = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(await fetchdata.json());

    
// }
// fetchalldata()
// console.log(result);

let x = 2;
let y = 3;
let result = x+y;
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=> data.json())
.then((jsonData)=> console.log(jsonData))
.catch((error)=> console.log(error));
console.log(result);
