let x = 9;
let y=10;
let result = x+y;
async function fetchalldata(){
    let fetchdata= await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log( await fetchdata.json());
    
}
fetchalldata();
console.log(result);
