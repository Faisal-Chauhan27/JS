// const tinderUser = new Object()//singleton object
 
const tinderUser={}
tinderUser.Id= "123abc"
tinderUser.name="Jackie"
tinderUser.IsloggegIn=false
// console.log(tinderUser);


const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Faisal",
            lastname:"chauhan"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)//ek{}empty array liya jaata hai baadme agar value add ho toh waisa toh result peh koi farak nhi padta 
// console.log(obj3);
//better way to do it is spread operator

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));

console.log(tinderUser.hasOwnProperty('IsloggegdIn'));
//it check if the obj has that value or not

const course = {
    coursename:"js in hindi",
    courseamount:"999",
    courseInstructor:"Hiteshchoudhary"
}

// console.log(course.courseInstructor)

const {courseInstructor:Instructor}=course//:ke baad joh kiya hai woh sirf name change karne ke liya usska
// console.log(courseInstructor);
console.log(Instructor);

//the above method is used jab values bht baar print karane ho toh 
// baar baar pura likne ke zarorat nah pade




