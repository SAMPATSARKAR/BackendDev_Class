let x = 2;
let y= 3;
let result = x+y;
// async function fetchalldata(){
//     let fetchdata = await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log(await fetchdata.json());

// }
// fetchalldata();//async task
// console.log(result);


fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})


