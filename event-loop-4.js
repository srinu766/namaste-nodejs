const  fs = require("fs");

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("Timer expered"),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB")
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nexttick"))
    console.log("next tick")
})

console.log("Last line of the file");



// result

// Last line of the file
// next tick
// inner nexttick
// promise
// Timer expered

// setImmediate
// File Reading CB
