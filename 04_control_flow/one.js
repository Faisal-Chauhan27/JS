// if 
// const userLoggedIn = true
const temperature = 41
// if (temperature === 40){
//     console.log("less than 50")
// }else {
//     console.log("temperature is greater than 50");   
// }
// console.log("Executed");


// < , >, <=,>=, ==(compare values) ,!=,===(it check the data type also),!==
// 5 != "5" is false , 5 !== "5" is true

// const score = 200
// if(score >100){
//     let power='fly'
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`)

// const balance = 1000
// if(balance<500){
//     console.log("Less than 500");
// }else if(balance<700){
//     console.log("Less than 700");
// }else if(balance<900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn =true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromGmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed to purchase course");
}

if(loggedInfromGmail || loggedInfromGoogle){
    console.log("User logged in");   
}
