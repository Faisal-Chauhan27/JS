// for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each Char is ${greet}`);
}

//Maps
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('FR',"France")
// console.log(map);

for (const [key,value] of map) {//[yeh karne seh array destructure ho jaata hai]
    // console.log(key,':-',value);
}

const myObj={
    game1:'FCMobile',
    game2:'CounterStrike'
}

// for (const [key,value] of myObj) {
//     console.log(key,':-',value);//myObj is not iterable
// }