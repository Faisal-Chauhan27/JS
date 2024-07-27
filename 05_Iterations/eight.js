const myNum=[1,2,3]

//accumulator + currentValue add hote hai phir woh value accumulator meh jaate hai
// const total=myNum.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const total =myNum.reduce((acc,curr)=> acc+curr,0)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const amount =shoppingCart.reduce( (acc,item) =>acc+item.price,0 )
console.log(amount);