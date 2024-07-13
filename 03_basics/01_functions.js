//functions ko aisa leh skte hai ke ek jaga sabko store kiya hai usske copy kitne baar he leh skte hai
function sayMyname(params) {
  console.log("F");
  console.log("A");
  console.log("I");
  console.log("S");
  console.log("A");
  console.log("L");
}

// sayMyname()  a//name likega toh reference aayega then () lagane meh execute hoga


function twoNumbers(number1, number2) {
  //   let result = number1 + number2
  //   return result
  return number1 + number2;
}
const result = twoNumbers(4, 5);
// console.log("Result :", result);

function justLoggedin(username = "sam") {
  if (!username /*username ==undefined*/) {
    console.log("Please enter a username");
    return; //return ke baad joh bhi hoga woh execute nhi hoga
  }
  return `${username} just logged in`;
}
// console.log(justLoggedin("Faisal"))//agar koi value nhi daale the sam print ho jaayega ,
//value is given toh overwrite hojaayega

function calculateCartPrice(val1,val2 ,...num1) {
  return num1;//...act as an rest operator here woh saare values ko lehga
}
console.log(calculateCartPrice(2,200,400,700))

const user = {
    username:"Faisal",
    price:199
}

function handleobject(anyobject){
    console.log(`Username name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
// direct object bhi pass kar skte hai 
handleobject({
    username:"sam",
    price:300
})

////array 
const newArray =[23,34,45,56]
function myArray(getArray){
    return getArray[2]
}
// console.log(myArray(newArray))
console.log(myArray([45,56,67,87]))



//////////////////////////Pratice ////////////////////

// const desktop={
//     desktopName:"HP",
//     price:120000,
//     version:"latest"
// }

// function desktopObject(anyobject)//function waala() is parameter likte hai{
//     console.log(`The desktop name is ${anyobject.desktopName} and it has a price of ${anyobject.price} and the 
// version is ${anyobject.version}`)
// }
// desktopObject(desktop)//issme argument