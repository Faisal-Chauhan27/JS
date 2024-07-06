// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,12)//jab single meh month daalte hai toh start from zero>=jan
// let myCreateDate = new Date(2024,0,12,5,3)//after date time hai 
let myCreateDate = new Date("2024-07-03")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp =  Date.now()
// console.log(myTimeStamp);//millisecond value dega
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));//to get in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",

}));