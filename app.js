require('./xyz')
const {calculate, calculateMultiply} = require('./calculate')
const data =  require('./data.json')

const utils = require('util')

console.log(utils)

console.log(data)
console.log(JSON.stringify(data))

var a =10
var b=20
calculateMultiply(a,b)
calculate(a,b)
