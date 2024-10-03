// primmitive datatypes

// 7 types: String, Number, Boolean, null, undefined,Symbol,BigInt

// Java Script is type Language

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outssidetemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

//const bigNumber = 334568955889n

// Reference Type(NOn Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
{
  let myObj = {
    name: "shubham",
    age: 22,
  };
}

const myfunction = function () {
  console.log("Hello world");
};
console.log(typeof scoreValue);
console.log(typeof myfunction);

//Memory
//+++++++++++++++++++++++++++++++++++++++++++

// Stack(priitive)- we get a copy of decleared variable
// Heap(Non-primitive)- Refrence of a original value

let myNickname = "shubham";

let anothername = myNickname;
anothername = "chaiaurcode";

console.log(myNickname);
console.log(anothername);


let  userOne={
    email: "shubham12@gmail.com",
    upi: "shubham@ybl"
}
let userTwo=userOne

userTwo.email="shubham7328@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)