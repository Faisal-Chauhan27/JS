const marvel_heros = ["Ironman","Thor","CaptainAmerica"]
const DC_heors = ["Batman","Aquaman","Wonderwoman"]

// marvel_heros.push(DC_heors)//joh dcheros puch hoge woh 3 element ho jaayega
//array ke andr array

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(DC_heors)
console.log(allHeros);//concat combines two or more arrays

//joh concat seh hota hai same can be done by spread
//eg kaach ka gilaas geera doh woh geerka spread ho  jaayega
//every elemt of array act as an individual elemnt 

const all_new_heros = [...marvel_heros,...DC_heors]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
console.log(another_array.flat(Infinity));//bracket ke andr hai ke kitne depth tak karna hai
//returns a array with concating all sub-array

console.log(Array.isArray("Faisal"));
console.log(Array.from("Faisal"));//convert into array
console.log(Array.from({name:"Faisal"}));//interesting

let score1 =100
let score2 =200
let score3=300
console.log(Array.of(score1,score2,score3));

