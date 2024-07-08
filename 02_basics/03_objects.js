// singleton
//Object.create constructor seh banta hai

//object literals

const mySym = Symbol("Key1")

const JsUser ={
    name:"Faisal",
    "full name":"Faisal Chauhan",
    [mySym]:"mykey1",
    age:21,
    location:"Mumbai",
    email:"faisal@google.com",
    isLoggedIn:false,
    lastLoginDay: ["Monday","Saturday"]
}

// console.log(JsUser.email);  //ways to object
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);// yeh full name string declare kiya hai 
//woh hota toh string he hai but jab aisa declare karte hai tab [] waala method
//he work karega to acces it 

// console.log(typeof JsUser.mySym);//aisa meh it will give the same value 
//but it act as string not symbol
console.log(JsUser[mySym]);

//TO change the value 
JsUser.email = "faisal@chatgpt.com"
// Object.freeze(JsUser)// It freeze the object to make any changes
JsUser.email= "faisal@microsoft.com "
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);//this. lagaoge usske andr ke properties mil jaayegi
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

