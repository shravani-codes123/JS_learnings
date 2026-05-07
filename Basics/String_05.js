const name = "Shravani";
const repoCount = 50;

console.log(name + repoCount +"value"); //

// This is String Interpolation
console.log(`${name} has ${repoCount} repositories`);


const gameName = new String('shravani-jadhav');
console.log(gameName);
console.log(typeof gameName); // object


console.log(gameName.charAt(0)) // s

console.log(gameName[0])//s

console.log(gameName._proto__); // String.prototype

console.log(gameName.charAt(4)); // s

const newString = gameName.substring(0,4);
console.log(newString); //shra

const anotherString = gameName.slice(-8,-4); // -8 to -4
console.log(anotherString); //jadhav

const newStringOne = "  shravani  ";
console.log(newStringOne.trim()); // "shravani"
console.log(newStringOne); // added spaces are not removed from original string because string is immutable

console.log(newStringOne.trimStart());
 // "shravani  "//removed sapces from start of the string

console.log(newStringOne.trimEnd()); 
// "  shravani"
// removed spaces from end of the string

const url = "https://shravani.com/shravano%20jadhav";
const newUrl = url.replace('%20', '-');
console.log(newUrl); 
//Original string is not modified because string is immutable, a new string is returned with the replacement.


//Coverting string to array
console.log(gameName.split("-")); // ["shravani", "jadhav"]

const sen = "this is a sentence";
console.log(sen.split(" ")); // ["this", "is", "a", "sentence"]

//split methos seperates the string into an array of substring based on the spaces and -

