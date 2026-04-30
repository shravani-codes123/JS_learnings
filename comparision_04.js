console.log("02" > 1);
console.log("2" > 1);
// js covert string to number and then compare
console.log(null > 0); // null is converted to 0, so this is false
console.log(null == 0); // null is not converted to 0, so this is false
console.log(null >= 0); // null is converted to 0, so this is true 
//comparison operators convert null to number but equality operator does not convert null to number

console.log(undefined > 0); // undefined is converted to NaN, so this is false
console.log(undefined == 0); // undefined is not converted to 0, so this is false
console.log(undefined >= 0); // undefined is converted to NaN, so this is false


console.log("2" == 2);//converted to number and then compare
console.log("2" === 2);// not converted to number