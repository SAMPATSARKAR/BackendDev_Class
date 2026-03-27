import querystring from 'querystring'; 
const qs = "id=10&name=laptop&price=80000"
const parsed = querystring.parse(qs);
console.log(parsed);

