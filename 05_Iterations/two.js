//while >= value initialize karo,condition daalo , increment aur dec wagera

let index=0
while (index<=10) {
    // console.log(`Value of index is: ${index}`);
    index=index+2
}

let myArry =["Batman","CaptainAmerica","Thor"]
// console.log(myArry.length)
let arr=0
while(arr<myArry.length){
    // console.log(`Values of Superheros is ${myArry[arr]}`);//[uss waqt peh joh index hai usske value chahia nah ke saare]
    arr=arr+1;
}

// do while loop
let score =11

do {
    console.log(`Score is: ${score}`);
    score++
} while (score<10 );//Output 11 aata hai becz pehla do hota hai then condition check hote hai while meh

// let score =1 
// let bollNo=3
// do {
//     console.log(`Score is: ${score},Bowl number is: ${bollNo}`);
//     score++
//     bollNo++

// } while (score<10 && bollNo<10);