// Arrays 2

const marverlHeroes = ["thor", "ironman", "hulk", "captain america", "black widow"];

const dcHeroes = ["superman", "batman", "wonder "];

const allheroes = marverlHeroes.concat(dcHeroes); // concatenate two arrays and return a new array.
console.log(allheroes);


const all_new_heroes = [...marverlHeroes, ...dcHeroes]; // using spread operator to concatenate two arrays and return a new array.
console.log(all_new_heroes);


const another_heroes =[
    1,2,3,[4,5,6],7,8,[9,10]
]
console.log(another_heroes.flat()); // flatten the array and return a new array.


console.log(Array.isArray("Shravani")); // check if the variable is an array or not.

//create array of characters from a string
const str = "Hello World";
const charArray = Array.from(str);
console.log(charArray);


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); 
// create an array from the given arguments 
// and return a new array.

