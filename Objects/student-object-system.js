// ==============================
// OBJECT PRACTICE TASK
// ==============================

// Step 1:
// Create an object for a student

const mySym = Symbol("id");

const Student = {
    name : "Shravani",
    age : 19,
    marks : 90,
    city: "Ahilyanagar",
    [mySym] : "user@123"
};

// Step 2:
// Print all object details
console.log(Student);


// Step 3:
// Update marks value
Student.marks = 95;
console.log(Student);


// Step 4:
// Add a new property:
// college
Student.college = "KIT college";
console.log(Student);


// Step 5:
// Add a method inside object

// Method name:
// greet
Student.greet = function(){
    console.log(`Hello all ${this.name} this side`);
}

// Output example:
// "Hello Shravani"
Student.greet();


// Step 6:
// Add another method
Student.Info = function(){
    console.log(`I am ${this.age} and Currently pursuing B.tech in ${this.college}`);
}

Student.Info();


// Method:

Student.checkMarks = function(){
    return this.marks >= 40 ? "Pass" : "Fail";
}
let ResultStatus = Student.checkMarks();



//check grade

Student.GradeCheck = function(){
    let Grade = "";
    if(this.marks >= 90){
        Grade = "A";
    }
    else if(this.marks >= 75){
        Grade = "B";
    }else if(this.marks >= 50){
        Grade = "C";
    }else{
        Grade = "D";
    }
    return Grade;
}
let GradeObtained = Student.GradeCheck();

console.log(`    Student name ${Student.name} 
            Result status : ${ResultStatus}
            Grade obtained : ${GradeObtained}`);
            



      
Object.freeze(Student);

Student.name = "Sneha";

console.log(Student);



