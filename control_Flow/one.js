// if(condition){
//     // code to be executed if condition is true
// }

const { use } = require("react");

if(true){
    console.log('This will always be executed');
}

if(false){
    console.log('This will never be executed');
}else{
    console.log('This will be executed if the condition is false');
}

const userLoggedIn = true;

if(userLoggedIn){
    console.log('Welcome back!');
}


const score = 200;
if(score > 100){
    var power = 'Super Strength';//allows to access power variable outside of the if block
    console.log(`You have ${power}`);
}
console.log(power); // ReferenceError: power is not defined



const balance = 1000;

if(balance > 500) console.log('You have a good balance');

//check multiple conditions
const age = 25;

if(age < 18){   
    console.log('You are a minor');
}else if(age >= 18 && age < 65){
    console.log('You are an adult');
}else{
    console.log('You are a senior');
}

// const userLoggedIn = true;
// const paid = true;

// if( userLoggedIn && paid){
//     console.log('Access granted');
// }
// else{
//     console.log('Access Denied');
// }

//Truthy and falsy values

const userEmail = "@Hitesh.ai";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}
// false values -> 0 , -0 , BigInt , null , undefined , Nan,0n

//truthy values

//"0" , true, function(){} , "function", {}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(" Onject is empty")
}


//Nullish Coalesing Operator (??) : null undefined


let val1 

val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);

//ternary operator

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log(80) : console.log("less than 80")





