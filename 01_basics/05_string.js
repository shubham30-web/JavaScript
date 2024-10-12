const name = "Ritesh";
const repoCount = 50;

// console.log(name + repoCount + "value");

console.log(`heloo my name is ${name} and my repo counnt is ${repoCount}`);

//string decleration

const gameName = new String("shubham kumar");

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-2);
console.log(anotherString);

const newStringOne = "   Shubham    kumar  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const trimedString = newStringOne.trim();
console.log(trimedString);

const resultString= trimedString.replace(/\s+/g, " ");
console.log(resultString); 


const url="https.//shubham%30shubham12"
console.log(url.replace('%30','-'))

console.log(url.includes('shubham'))


console.log(gameName.split('-'));