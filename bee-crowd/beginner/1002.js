var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const pi = 3.14159
const [R] = lines.map(item => parseFloat(item))
const A = pi*R**2
console.log("A=" + A.toFixed(4))