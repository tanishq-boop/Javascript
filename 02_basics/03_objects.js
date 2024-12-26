//object literals
const mySym = Symbol("key1")
const jsuser = {
    name:"Tanishq",    // automatically reads the keys as strings
    "full name":"Tanishq Agarwal",
    [mySym] :"key1",  // syntax for declaring symbol in an object
    age:19,
    location:"Jaipur",
    email:"tanishq@gmail.com",
    isLoggedin :false
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);  //better way to access values because values of keys like full name can't be accessed with the above dot method
// console.log(jsuser["full name"]);  // gives error when accessed using the dot method
// console.log( jsuser[mySym]);
//  jsuser.email = "a@gmail.com"  // to change values of keys
//  Object.freeze(jsuser)    // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

 //console.log(jsuser);

 jsuser.greeting = function(){
    console.log("Hello User");
 }
 jsuser.greetingTwo = function(){
    console.log(`Hello User ,${this.name}`);
 }
 
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
