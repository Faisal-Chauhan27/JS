// arrays

const myArr = [0,1,2,3,4,5]

const heros = ["Batman","Captain America"]

const myArr2= new Array(0,1,2,34,4)
// console.log(myArr[1]);
// console.log(heros[1]);

//Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()//last value ko nikal dega

// myArr.unshift(90)//yeh value ko start meh daal deta hai
// myArr.shift()//remove the start value

// console.log(myArr.includes(9));//boolean meh dega
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(typeof newArr);

//// Slice , Splice

console.log("A"  ,myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B"  ,myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C"  ,myArr);

// Slice >=does not change original array
// Splice >= change the original array


