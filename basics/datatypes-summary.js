// Primitive

// 7 types: String , Number , Null , Boolean , Undefined , Symbol , BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let emailId; //=>undefined

const Id = Symbol('123');
const anotherId = Symbol('123')

console.log(Id === anotherId);

//Reference (non-primitive)

//Arrays , Objects , Function

const heroes = ["Ironman", "Hulk", "Jethalal"];
 let object = {
    name:"Tanishq",
    job:"student", 
 }

 let myfunction = function(){
    console.log("Hello World");
    
 }

 console.log(typeof heroes);

//JavaScript is dynamically typed In dynamically typed languages, the data types of variables are determined by the value they hold at runtime. This means that a variable of the same name can be used to hold different data types.



//*************************************************************************************************************** */

//Stack(Primitive) , Heap memory(Reference)

