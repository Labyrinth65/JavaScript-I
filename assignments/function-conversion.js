// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };

const myFunction = () => console.log("Function was invoked!");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };

const anotherFunction = (param) => param;
console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };

const add = (a, b) => a + b;
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (a, b) => a - b;
console.log(subtract(1,2));

// Stretch

// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => num * 3);
console.log(triple);