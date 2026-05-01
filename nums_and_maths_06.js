// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Learining Numbers and maths");

const num = 400; // using datatype
console.log(num);

const newNumber = new Number(100);// this is an object
console.log(newNumber);

// Converted number to string and calculated it's length
console.log(newNumber.toString().length);

//fixed => last 0 or digits fix
console.log(newNumber.toFixed(2));

const otherNumber = 1112.89; /// exponential

const Number_2 = 1112.89;

console.log(otherNumber.toPrecision(3));
console.log(Number_2.toPrecision(4));

//+++++++++++++Math+++++++++++++//
//Generates values between 0 to 1
console.log(Math.random());

//We want values starting from 1
console.log((Math.random() * 10 ) + 1);

 
//Function to generate random numbers 

function GenerateRandom(min , max){
    for(let i = 1 ; i<= 10 ; i++){
           console.log(Math.floor(Math.random() * 
           (max - min + 1)) + min)
    }
}
const min = 50 ;
const max = 100;
GenerateRandom(min, max);


