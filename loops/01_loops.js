//For loop

for(let i = 0 ; i < 5 ; i++){
    console.log(i);
}

for(let index = 0 ; index < 10 ; index++){
    const element = index // only accessible in loop
    if(element == 5){
        console.log("this is 5")
    }
    console.log(element)
}

for(let i = 1 ; i <= 10 ; i++){
    console.log(`outer loop ${i}`);
    for(let j = 0 ; j<=10 ; j++){
     console.log(i +'*'+j +'=' + i*j);
    }
}

//loop on array
const myArray = ['Superman', 'Batman', 'superman'];

for(let j = 0 ; j < myArray.length ; j++){
    console.log(myArray[j]);
}


//break and continue
for(let k = 1 ; k <= 10 ; k++){
    if(k == 5){
        console.log("Detected 5");
        break;
    }
    console.log(k);
}

for(let l = 1 ; l <= 5 ; l++){
   if(l == 4) continue;
   console.log(l);
}
