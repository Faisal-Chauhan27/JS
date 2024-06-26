// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
 
///////////////// ctrl and forward slatch for comment together/////////////

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//equality check == and comparison > < >= <= works differently
//comparison convert null to a number treating is as zero
//  that's why null>=0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check (checks value + data types)

console.log("2" === 2);