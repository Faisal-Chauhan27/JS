//Immediate Invoke Function Expressions(IIFE)

/*This prevents accessing variables within the IIFE idiom as well as
polluting the global scope.*///(IMP)

/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function
that runs as soon as it is defined*/

(function chai(){
    //Named IIFE
   console.log("DB connected") 
})();
// two IIFE Function is to be  seperated by a semicolon; 

((name) =>{
  console.log(`DB is Connected Sir ${name}`);
})("Faisal");




///Pratice Time



(function two(){
    console.log("Hey This is Faisal");
})();

(()=>{
    console.log("This is me Rocky")
})()