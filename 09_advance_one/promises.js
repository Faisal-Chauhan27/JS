const promiseOne = new Promise(function (resolve,reject) {
    //do an async task
    //DB calls,cryptography,network
    setTimeout(() => {
        console.log("async task completed");
        resolve()  
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise consumed");   
})
//.then is related to resolve // issme  consumption hua hai

new Promise(function(resolve,reject){   
    setTimeout(function(){
    console.log("async task 2"); 
    resolve()   
    },1000)     
}).then(function(){
    console.log("Promise 2 consumed");    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"faisal" , emailId:"chaiexample.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);   
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error) {
            resolve({username:"Faisal",password:"123"})
        }else{
            reject({Error:"something went wrong"})
        }
    },1000)     
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);    
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The Promise is finally resolved or rejected")
)
//yeh chaining hua hai , you can't store the value of user.username
//in some variable then ussko console karke mil jaayega ,hume chaining karne hoge
//phir he woh hame milega

//async await works just like .then bas halka kuch farak hai 

const promiseFive=new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"Javascript",password:"123"})
        }else{
            reject({Error:'Js went Wrong'})
        }
    },1000) 
});
//async await directly error handle nahi kar skta 
async function consumePromiseFive() {
    try {
        const response =await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);    
    }    
}
consumePromiseFive()

// async function getAllusers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getAllusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
}).catch((error)=>console.log(error))



// Promise.all()
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'bar');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, "foo", "bar"]
  })
  .catch((error) => {
    console.log(error);
  });
