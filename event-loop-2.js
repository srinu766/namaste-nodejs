const fs = require("fs");

const a= 100;

setImmediate(()=>console.log("setImmediate"));

Promise.resolve("Promise").then(console.log)
Promise.resolve("Promise").then(()=>console.log("promise1"))

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File Reading CB");
})

setTimeout(()=>console.log("Timer expired"));

process.nextTick(()=>console.log("process nexttick()"));

function printA(){
    console.log("a=",a);
}

printA();
console.log("Last line of the file")