const fs = require("fs");
const https = require("https");


console.log("heelo world"); 
// sync
// fs.readFileSync('./file.txt', 'utf8',(err, data)=>{
//     console.log("file data sync")
// })  
fs.readFileSync("./file.txt", "utf8", (err, data)=>{
console.log("file data sync")
})

var a = 1000;
var b = 2000;

https.get('https://jsonplaceholder.typicode.com/users',(res)=>{
    console.log("fetched successfully");
})

setTimeout(()=>{
    console.log("setTimeout 5000 ms")
},100);


// async
fs.readFile("./file.txt", "utf8", (err, data)=>{
    console.log("file data async", data)
})

function mul(x,y){
    return x*y
}

const c = mul(a,b);

console.log(c)