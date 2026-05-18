
// Map in js
const mp = new Map();
//Maps are not iterable 
mp.set("a", 1)
mp.set("b", 2)
mp.set("c", 3)
mp.set("d", 4)

console.log(mp);
//Loops on map 
//Print Keys in map
for(const [key,value] of mp){
    console.log(key , ':-' , value)
}

//Creating an object
const myGames= {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}
//For in loop
//Basically for in use to access the keys of object
for(const key in myGames){
    console.log(key)
}

const coding = ["css" , " html", "cpp" , "java" , "c"];

coding.forEach(function (val){
    console.log(val);
})

//Declare language object
const language = [
    {
      langName: "Java",
      langFile: ".java"
    },
    {
        langName: "C++",
        langFile:".cpp"
    }
]

//Using forEach loops on language object.
language.forEach((val)=>{
    console.log(val.langName);
});