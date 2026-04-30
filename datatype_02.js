"use strict";
// treat all js code as newer js

console.log(3+3);
console.log("Shravani");
// code readability and maintainability

let name = "Shravani"; // string literal
let age = 21; // number literal
let isStudent = true; // boolean literal
let city; // undefined
let collegeName = null; // null literal
let symbol = Symbol('unique'); // symbol literal
console.table([name, age, isStudent, city, collegeName, symbol]);

console.log(typeof undefined)
console.log(typeof null) // object (bug in js)
console.log(typeof NaN)