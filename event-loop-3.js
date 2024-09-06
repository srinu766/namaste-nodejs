const  fs = require("fs");

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("Timer expered"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", ()=>{
    setTimeout(()=>console.log("2nd Timer"),0);

    process.nextTick(()=>("2nd Nexttick"));

    setImmediate(()=>console.log("2nd setImmedite"));;

    console.log("File Reading CB")
});

process.nextTick(()=>console.log("next tick"));

console.log("Last line of the file")

//  result

// Last line of the file
// next tick
// promise
// Timer expered
// setImmediate
// File Reading CB
// 2nd Nexttick
// 2nd setImmedite
// 2nd Timer
