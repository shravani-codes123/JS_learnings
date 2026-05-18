// const conding = ["Cpp" , "JAVA" , "HTML", "Python"];

// const values = coding.forEach((item) => {
//     console.log(item);
// });

const myNums = [1,2,3,4,5,6,7,7,8,8,9]
const Numbers = myNums.filter((nums) => nums > 4)
console.log(Numbers);


//if we write condition in scope then we have to use {}

const newNums = myNums.filter((item) => {
    //item > 4 this can give error
    return item > 4;
})
console.log(newNums);


//Another Method
const container = [];
myNums.forEach((item) =>{
    if(item > 4){
        container.push(item)
    }
})

console.log(container)

const myNumbers = [1,2,3,4,5,6,7,7,8,8,9]

const result = myNumbers.map((nums)=>{
    return nums + 10;
})

console.log(result)
const coding = ["Cpp", "JAVA", "HTML", "Python"];

const values = coding.forEach((item) => {
    console.log(item);
});

const books = [
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: 2020
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 2014
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 2021
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: 2017
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publish: 2016,
    edition: 2019
  }
];

const b = [];
let userBooks = books.filter((item) => {
    return item.genre === "Productivity";
});
//as we have given condition in {} braces so we have to return 
// the value
userBooks = books.filter((val) => val.genre === "Productivity")
console.log(userBooks);

const myNumbers = [1,2,3,4,5,6,7,7,8,8,9]

const result = myNumbers.map((nums)=>{
    return nums + 10;
})
console.log(result)



const newMap = myNumbers
               .map((nums) => nums*10)
               .map((nums) => nums + 1)
               
console.log(newMap)


//add filter into that
const newMap2 = myNumbers
               .map((nums) => nums*10)
               .map((nums) => nums + 1)
               .filter((nums) => nums >=41)
console.log(newMap2)