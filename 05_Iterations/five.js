const coding =["js","ruby","java","Python","cpp"]

//foreach meh callback fn meh fn likhte teh woh likhna hai,fn ka name nhi hota 
// coding.forEach( function (items) {
//     console.log(items);
// })

// coding.forEach( (items)=>{
//     console.log(items);
// } )

function printMe(items){
    console.log(items);
}
// coding.forEach(printMe)//issme reference deh rahe hai function ka

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )

const myCoding =[
    {
        languagename:"Javascript",
        languageFilename:"js"
    },
    {
        languagename:"Java",
        languageFilename:"java"
    },
    {
        languagename:"python",
        languageFilename:"py"
    }
]

myCoding.forEach((element) => {
    console.log(element.languagename);
});