//Primitive
// 7 types : string, number , boolean, undefined, null, symbol, bigint
// call by value
//symbole is used to create unique identifiers

const score = 100 ;
console.log(score);
// js is dynamically typed language

const id = Symbol("id");
console.log(id);
//Non-Primitive
// object, array, function
// call by reference

const anotherId = Symbol('123');


let arr1 = [10, 20];
let arr2 = [...arr1];  // spread operator

arr2.push(30);

console.log(arr1);
console.log(arr2);

const heros = ["ironman", "spiderman", "thor"];


let obj = {
    name : "Shravani",
    age : 21,
    city : "Ahilyanagar"
}

const myFunction = function(){
    console.log("This is a function expression");
}

console.log(myFunction);
