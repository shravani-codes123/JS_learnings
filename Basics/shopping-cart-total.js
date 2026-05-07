
let products = [
    {name :"Book", price : 50 , qtn : 2},
    {name : "Pen" , price : 20 , qtn : 3},
    {name : "Bag" , price : 500 , qtn : 2},
    {name : "notepad", price : NaN , qtn :3}
];
console.log(products)



let total = 0;

products.forEach((item ) =>{
    let value = Number(item.price);
    if(isNaN(value) || value < 0) {
         return;
        
    }
    let quantity = item.qtn;
   
       total = total + (value*quantity);

});

console.log(total);


