const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//convert to string
// console.log(balance.toFixed(2));//decimal kitna chahia 

const anotherNum = 123.897
// console.log(anotherNum.toPrecision(3));
//returns a string representing this number
//(cont) to the specified number of significant digits.

const hunderds = 1000000
// console.log(hunderds.toLocaleString());
//issme by default yeh indian standard ke hisaab seh hai agar nhi rahe toh 'en-IN'
//for us 'en-US'

//+++++++++++++++  MATHS +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-9));
// console.log(Math.round(4.54));
// console.log(Math.ceil(4.2));//highest value(4 seh halka bada toh 5)
// console.log(Math.floor(4.9));//lowest value leta hai(4 seh kitna he bada ho phir bhi 4)
// console.log(Math.max(5,7,9,10));
// console.log(Math.min(5,7,9,10));

console.log(Math.random());// lies betn 0 and 1
console.log((Math.random()*10) +1);//+1 kyuki value zero bhi ho skti hai to avoid that
console.log(Math.floor(Math.random()*10) +1);//agar value 0.1 aaye toh Math.floor value 0 deh dega
//(cont) therefore +1

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min +1))+ min);

