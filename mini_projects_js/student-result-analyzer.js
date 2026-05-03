

console.log("Student Result Analyzer.");

const Students = [
    {name :"A", marks : 80}, 
    {name : "B", marks : 60} ,
    {name : "C" , marks : 75}, 
    {name : "D" , marks :  47}, 
    {name : "E" , marks : 90}, 
    {name : "F" , marks : 88} , 
    {name : "G" , marks : 35} , 
    {name : "H" , marks : 36}, 
    {name : "I", marks : 40}
    ];

console.log(Students)

//creating array for passed students
const PassedStudentList = [];
// No of students=>
let n = Students.length;

let highest = Students[0].marks;
let lowest = Students[0].marks;
let sum = 0;
let PassedStudents = 0;
let topper = Students[0].name;

Students.forEach((m)=>{
    let mark = m.marks;
  if(mark  > highest){
      highest = mark;
      topper = m.name
  }
  if( mark < lowest){
      lowest = mark;
  }
  if( mark >= 40){
      PassedStudents++;
      PassedStudentList.push(m.name)
  }
  sum += mark;
  
});


console.log(`Highest Marks are: ${highest} , Lowest Marks : ${lowest}`)

let Avg = (sum /n);
console.log(`Avg marks of student is ${Avg.toFixed(2)}`);

console.log(`Passes Students : ${PassedStudents}`);

console.log(`Congratulations Topper : ${topper} 
Secured 1st Rank in class
with Percentage ${highest}%`)

console.log("Our Passed Student List :");
console.log(PassedStudentList);





