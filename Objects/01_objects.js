//Singleton 

//Object literal

Object.create(null)
const Jsuser = {}

myArray= ["h" , "i"]


//Todays i am learning objects in js

const mySym = Symbol("Key1");
console.log(typeof(mySym));

const JsUser = {
  name : "Shravani",
  mySym: "Key1",
  age : 19,
  email : "shravanij368@gmail.com",
  std : "2nd Year",
  address : "Ahilyanagar"
};

console.log(JsUser);

console.log("Accessing the object elements");
console.log(JsUser.name);
console.log(JsUser["std"]);
console.log(JsUser["age"]);
//how symbols works in objects
console.log(JsUser[mySym]);

//changing values in object

JsUser.email = "Student@chatgpt.com";

console.log(JsUser.email);

console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old. I am a ${this.std} student and my email is ${this.email}. I live in ${this.address}.`);
}

console.log(JsUser.greeting());

//Lock the object , No changes are allowed 

Object.freeze(JsUser);

//check
JsUser.name = "Khushi Sharma";

console.log(JsUser.name);




