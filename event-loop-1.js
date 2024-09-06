const fs = require("fs");

const a=100;

setImmediate(()=>console.log("setimmediate"));

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File Readimg CB");
} )

setTimeout(()=>{
    console.log("time expired")
},)

function printA(){
    console.log("a=",a);
}

printA()

console.log("last line of the code")


// RESULTS

// 100
// last line of the code
// time expired
// setimmediate
// File Readimg CB
