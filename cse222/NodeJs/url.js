import {URL} from "url";
const url = new URL("http://localhost:3000/products?id=10&name=laptop");
console.log(url);
console.log(url.port);
console.log(url.hostname);
console.log(url.protocol);
