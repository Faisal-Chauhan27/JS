const name = 'faisal'
const repoCount = "10"
// console.log(name + repoCount + " Value");

// this method is good using backtick 
console.log(`Hello my name is ${name} my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName[3]);// to access key

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0,4)// It doesn't include the last number
console.log(newString);

const anotherString = gameName.slice(-7,4)// can give -ve value in slice
console.log(anotherString);//end 4>=s joh include nhi hoga 3>=e include hoga
//reverse seh seh 7 jaana hai waaha seh start

const newStringOne = "       hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));


