var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A,B] = lines.map(item => parseInt(item))
let SOMA = (A+B)
console.log("SOMA = "+SOMA)