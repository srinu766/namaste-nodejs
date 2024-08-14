console.log("sum module");
var x = "hello world";
function calculate(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log("f",module.exports == {})

module.exports = { x, calculate };
