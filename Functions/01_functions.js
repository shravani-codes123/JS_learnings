function sayMyname(){
console.log("s");
console.log("h");
console.log("r");
console.log("a");
console.log("v");
console.log("a");
console.log("n");
console.log("i");
}

sayMyname();


function addTwoNumbers(num1 , num2){
    return num1 + num2;
}


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username");
        return;
    }
 return `Welcome back ${username}`;
}

console.log(loginUserMessage("Shravani"));

//Bydefault parameters
function log(name = "Guest"){
    console.log(`Hello ${name}`);
}

log();

//rest operator in js
function calculateCartPrice(...nums1){
    return nums1 //this will return array of numbers
}

console.log(calculateCartPrice(10,20,40))


function calculateCartPrice(val1 , val2,...nums1){
   return nums1
}

console.log(calculateCartPrice(10,20,40,50,60))

//val1 = 10
// val2 = 20
// nums1 = [40,50,60]

const user = {
    username : "shravani",
    price : 999,
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handleObject(user); 

handleObject({
    username : "Sneha",
    price : 1999,
})

const myNewArray = [200, 400, 100 , 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));