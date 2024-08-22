console.log("Hello world");

var a = 1000;
var b = 2000;

setTimeout(()=>{
    console.log("call me right now1")
})
setTimeout(()=>{
    console.log("Call me ASAP");
},5000)

setTimeout(()=>{
    console.log("call me right now0")
},0)



function mul(x,y){
    return x*y
}

var c = mul(a,b);

console.log("mul",c)