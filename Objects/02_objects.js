// const  tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedin = false

// const regularUsers ={
//     email : "Some@gmail.com",
//     fullname : {
//         userFullName : {
//             firstName : "Shravani",
//             LastName : "Jadhav"
//         }
//     }
    
// }

// console.log(regularUsers.fullname ?.userFullName.firstName);

// //? check whether fullname exists or not

// const target = {a : 1 , b : 2};
// const source = {b : 4 , c : 5};

// const returnedTarget = Object.assign(target,source);

// console.log(target);

// console.log(returnedTarget === target)
// console.log(target);

// //Safer way keep original target unchanged

// const newObj = Object.assign({},target,source);

// console.log(newObj);

// //using spread method
// const obj1 = {1 : "a" , 2 : "b"}
// const obj2 = {3 : "a" , 4 : "b"}
// const obj3 = {5 : "a" , 6 : "b"}

// const obj4 = {...obj1 , ...obj2 , ...obj3};

// console.log(obj4)


// // how we get data from database

// const users = [
//     {
//      emailId :"1@gmail.com"
//     },
//     {
//       emailId : "2@gmail.com"
//     },
//     {
//       emailId  : "3@gmail.com"
//     }
// ]
// //Acess values
// console.log(users[1].emailId)

// console.log(tinderUser);
    
// //Access key values only
// console.log(Object.keys(tinderUser))

// //Access values 
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

// //Check tinder user has property
// console.log(tinderUser.hasOwnProperty('name'))


// //Destructuring of object
// const course = {
//     courseName : "JavaScript",
//     price : 999,
//     courseInstructor : "Shravani",

// }

// const {courseInstructor : instructor} = course;

// console.log(instructor);

// const navbar = ({company}) =>{

// }
// navbar(company = "amazon"); 




