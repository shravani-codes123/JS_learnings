
const user ={
    userName : "Shravani",
    courseCount : 3,
    message : function(){
        console.log(`Hello ${this.userName} you are enrolled in ${this.courseCount} courses`);
        //console.loga(this);
    }
}

user.message();

user.courseCount = 4;

user.message();

//this keyword is used to access the properties of the object inside the method and it refers to the current object.

console.log(this);
//this will refer to the global object which is window in browser and global in nodejs.


//browser is a window and nodejs is a global object.

// function chai(){
//     let userName = "Shravani";//username must belong to an object to access it using this keyword
   
//     console.log(this.userName);
// }
//     console.log(this.userName);

const chai = () =>{
    let userName = " Shravani";
    console.log(userName);
}

chai()


//Arrow function

const addTwo = (num1 , num2)=>{
    return num1 + num2;
}

console.log(addTwo(10,20))

//without return keyword

const addTwo1 = (num1 , num2) => (num1 + num2);

console.log(addTwo1(10,20))
//use round brackets when we have more than one line of code in the function body


const addTwo2 = (num1 , num2) => ({userName : "Shravani"})

console.log(addTwo2(10,20));