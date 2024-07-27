const myNum =[1,2,3,4,5,6,7,8,9,10]

// const newNums =myNum.map( (num)=>num +10 )

const newNums =myNum
                    .map( (num)=>num*10 )
                    .map( (num)=>num+1 )//yeh chaining ho raha hai value just upar waale method seh aayegi
                    .filter( (num)=>num>30 )
                    .map( (num)=>num-11 )
console.log(newNums);

//Filter true or false rehta hai woh he return karta hai like condition
//par map sab reutrn karta hai

  


////pratice============== for each
// const newNums=[]
// myNum.forEach( (num)=>{
//       if (num>=1) {
//         newNums.push(num+10)
//       }
// } )

