const array = [1,2,3,4]

const initialValue = 0;

const myTotal = array.reduce((acc,curr)=>(acc + curr),0)
console.log(myTotal)


const Total = array.reduce(function(acc, curr){
      console.log(`acc ${acc} and curr ${curr}`);
      return acc + curr;
},0)

console.log(Total)


const shoppingCart = [
    {
        itemCart : "js course",
        price : 2999

    },
    {
        itemCart : "mobile dev",
        price : 5999
    },
    {
        itemCart : "Ds",
        price : 3000
    },{
        itemCart : "Web Dev",
        price : 4000
    }
]

const priceTopay = shoppingCart.reduce((acc ,item) => acc + item.price , 0)

console.log(priceTopay);