const userEmail = []

if(userEmail){
    console.log("Got user Email");
}  else {
    console.log("Don't have user email");
    
}

// falsy values  => 0 , BigInt(On) , -0 , false , "" , null , undefined , NaN

//truthy values => "0" , " " , [] , {} , function(){}



// if(userEmail.length === 0){
//     console.log("Array is Empty");
    
// }



// const Obj = {}

// if (Object.keys(Obj).length === 0 ) {
//     console.log("Object is empty");
    
// }


// Nullish coalescing operator (??) : null defined 

let val1;
//val1 = 5 ?? 10   // output => 5
//val1 = null ?? 10 // output => 10
//val1 = undefined ?? 15  // output =>15
val1 = null ?? 10 ?? 20  //output => 10

console.log(val1);

//Terniary operators

// condition ? true : false
 const maggie = 40

 maggie>=30 ? console.log("bhosdiwala") : console.log("Nice");
  