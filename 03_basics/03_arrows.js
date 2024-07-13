const user ={
    username:"Faisal",
    price:999,

    welcomeMessage :function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }//this>= is use to refer the current context 

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     username:"faisal"
//     console.log(this.username);/*function ke andr (this ) use nhi kar paaoge 
//     woh object ke andr use hoga*/
// }

// chai()

// const chai=function (){
//         username:"faisal"
//         console.log(this.username);
// }
// chai()

const chai = () => {
    let username="faisal"
    console.log(this.username);

}
// chai()

// () =>{}  yeh arrow function hai
// const addTwo=(num1,num2) =>{
//     return num1 + num2
// }

// const addTwo=(num1,num2) => num1 + num2//implict return 

// const addTwo=(num1,num2) => (num1 + num2)
/* jab() meh wrap karoge
toh return keyword ke zarorat nhi hai
but {}meh hai */

const addTwo=(num1,num2) => ({usrname:"Faisal"})//object banaya hai but machine ko
//yeh nhi pata woh isse as curl breaces treat kar raha hai
//jab wrap kiya machine understand that

console.log(addTwo(4,5))