const crypto =  require("node:crypto");

// console.log("crypto",crypto);

console.log("hello world");

var a = 1000;

var b = 2000;


crypto.pbkdf2Sync("password","salt",5000000, 50, "sha512");
console.log("first key is generated")



setTimeout(()=>{
    console.log("call me right now0")
},0)
setTimeout(()=>{
    console.log("call me right now1")
})

crypto.pbkdf2("password","salt",500000, 50, "sha512",(err, key)=>{
    console.log("Second key is generated");
}); 

function mul(x,y){
    return x*y;
};

var c = mul(a,b);

console.log("mul func ",c)