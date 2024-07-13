//{} ko he scope bolte hai,global aur local scope hote hai 
//we don't use var becz woh global scope meh bhi act karta hai
//eg agar c=30 in local , c=300 in global toh local waala global meh print ho jaayega
//  var c =300
let a =100
if (true) {
    const a =10
    let b =20
    c=30
    // console.log("Inner ",a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Faisal"

    function two(){
        const  website ="youtube"
        console.log(username);
    }
    // console.log(website);

     two()//username print nhi hoga until two() nah ho
    //becz two ko kabhi call he nhi kiya 

}
// one()

if(true){
    const username="Faisal"
    if (username==="Faisal") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); yeh error hai
}
// console.log(username);error hai

//++++++++++++ Interesting +++++++++++++//////////////////

console.log(addone(3))
function addone(num) {
    return num +1
}

addTwo()
const addTwo =function(num){
    return num +2
}
//above are two ways to declare a function and you can see 
//first waale meh error nhi aaye
/*second waale meh error aaye becz in that case initialization ke pehla
execute kar rahe ho*/



