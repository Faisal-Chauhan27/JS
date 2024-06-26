let score = "Faisal"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Faisal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Faisal" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


//prfix aur postfix ke kahani ///////////////////////////////////

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

/*If used postfix, with operator after operand (for example, x++),
 the increment operator increments and returns the value before incrementing*/

/*If used prefix, with operator before operand (for example, ++x), 
 the increment operator increments and returns the value after incrementing.*/

let x3 = 3;
const y3= ++x;
// x3 is 4; y3 is 4

let x4 = 3n;
const y4 = ++x2;
// x4 is 4n; y4 is 4n


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment