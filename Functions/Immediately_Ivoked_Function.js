

(function chai(){
    //named IIFE
   console.log('DB Connected');
})();

((name) =>{
    console.log(`Hello ${name}`);
})('John');

//IIFE is a function that is executed immediately after it is defined. 

(function this_is_iife(){
    console.log('DB Connected');
})()


const myArray = [1, 2, 3, 4, 5];

myArray.forEach(()=>{
    console.log('Hello');
});