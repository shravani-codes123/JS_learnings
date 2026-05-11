//Scope in functions
// let a = 10;

// const b = 20;

// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


//local scope
let b = 300;

//block scope
if(true){
    let a = 100;
    const b = 200;
     var c = 30;
    console.log(a);
}


console.log(b);
// b value is 300 because it is in global scope
console.log(c); 
//c value is 30 because var is function scoped and it is not block scoped so it is accessible outside the block as well


function one(){
    const username = "Shravani";
    
    function two(){
        const website = "youtube";
        console.log(username);
    }

    //console.log(website);
    two();
}
one();

//parent function can access child function but child function cannot access parent function variables


if(true){
    const userName = "Shravani";

    if(userName === "Shravani"){
        const website = "youtube";
        console.log(`Welcome ${userName} to ${website}`);
    }
  
    console.log(userName);
}


function addOne (num){
    return num + 1;
}



const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));