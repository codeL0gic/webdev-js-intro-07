// Prevent us from attempting to use variables
// that are not declared
"use strict";

//  function greet() {
//    console.log("Hello, World!");
//  }

// function add(num1, num2) {
//   return num1 + num2;
// }
// let sum = add(2, 4);
// console.log(sum);

// function greet(name = 'Guest') {

//   console.log(`Hello, '+ name + '!');
// }
// greet();
// greet("John");

// const greet = (anme) => {
//     return "Hello, ' + name + '!";
//     };

//     const greet = (num1, num2) => a + b;
//     let sum = add(2, 4);
//     console.log(sum);

function walk() {
  console.log(fast);
}

function address(house1, house2) {
  let house1Address = 4028;
  let house2Address = 4029;
  return house1Address + house2Address;
}
let sum = address(4028, 4029);
console.log(sum);

function address(house3, house4) {
  let house3Address = 10;
  let house4Address = 20;
  let sum = house3Address + house4Address;
  return house3Address + house4Address;
}
console.log("I am Home " + sum);
