// arrays
//Arrays can store multiple values in a single variable. They are ordered, mutable, and can contain elements of different types.
const myArray = [1,2, 3,4,5, "shravani", "null" , true , false , undefined];

console.log(myArray);


console.log(myArray.length); 
// length of the array

//Creating object of array using constructor
const myArray2 = new Array(1,2,3,4,5);

console.log(myArray2);

//Accessing elements in an array
console.log(myArray2[1]);

myArray2.push(6); // add element at the end of the array.

myArray.pop(); // remove the last element from the array.
console.log(myArray);

myArray.unshift(11); // add element at the beginning of the array.

console.log(myArray);

myArray.shift(); // remove the first element from the array.
console.log(myArray);

console.log(myArray.includes("shravani")); // check if the array includes a specific element.
// output: true

const newArray = myArray.join();

console.log(newArray); 
// convert the array to a string, with elements separated by commas.
console.log(typeof newArray);
 // output: string..

 const Arr = ["A","B", "C", "D", "E"];
 console.log(Arr.slice(1,4));

 const Arr2 = Arr.slice(1,4);
 console.log(Arr2);

 console.log(Arr.splice(1,2)); // remove elements from the array and return the removed elements.
console.log(Arr); // output: [ 'A', 'D', 'E' ]

//what is the difference between slice and splice?
// The main difference between slice and splice is that slice does not modify the original array, while splice modifies the original array by removing or addi  ng elements. Slice returns a new array containing the selected elements, while splice returns an array containing the removed elements .