const score = 400
//console.log(score, "kiloMeter");

const balance = new Number(100.9856)
//console.log(balance);

console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber=23.566
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));



//******************MATH***************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.pow(5))
console.log(Math.min(4,3,5,6,87,99,5,7,66,))
console.log(Math.max(4,3,5,6,87,99,5,7,66,))
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max- min + 1))+min)