let score = "hitesh";

console.log(typeof score); 
// string

let valueNumber = Number(score); 
// converts string to number
console.log(typeof valueNumber);

console.log(valueNumber); 
// NaN (Not a Number) because "33abc" cannot be converted to a valid number
// "33" => 33
//"33abc" = > NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // false

//let isLoggedIn = "hitesh";
//console.log(Boolean(isLoggedIn)); 
//true because non-empty strings are truthy

// for Empty string it will be false
let isLoggedIn = "";
console.log(Boolean(isLoggedIn));
 // false because empty strings are falsy

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string
