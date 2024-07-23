// for
//ctrl + D for multiple cursor
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("5 is the best number");
    }
    // console.log(i)
    
}
//Intialization hota hai , phir condition check ,then code execute hota hai
//jaisa he execute hua usske baad i++ hai woh hoga wapas condition check hoge
//condition right hai toh execute warna scope ke bahar nikal jaayega

for (let i = 0; i <=10; i++) {
    // console.log(`OuterLoop ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value ${j} and with outerloop ${i}`);
        //  console.log(`${i}*${j}=${i*j}`); this abd below line does same thing 
        // console.log(i + '*' + j + '=' +i*j);
    }
    
}

const myArry =["flash","Batman","Superman"]
// console.log(myArry.length);
// console.log(myArry.lastIndexOf("Batman"));
for (let index = 0; index <= myArry.length; index++) {
    const element = myArry[index];
    // console.log(element);
    
}

// break and continue
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`5 is detected`);
//         break;
//     }
//     console.log(`value of index is ${index}`); 
     
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`5 is detected`);
        continue//continue woh ek value ya case ko skip karke continue karne deta hai
    }
    console.log(`value of index is ${index}`); 
     
}
