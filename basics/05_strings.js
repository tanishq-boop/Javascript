const name = "Tanishq"
const age = 19

// console.log(name + age + " Value");
 
//console.log(`Hello my name is ${name} and my age is ${age}`);  // This is modern way to combine or write strings together using backtics and string interpositioning

const GameName = new String('Wukong')
// console.log(GameName);

// console.log(GameName[0]);
// console.log(GameName.__proto__);

// console.log(GameName.length);
// console.log(GameName.toUpperCase());
// console.log(GameName.charAt(2));
// console.log(GameName.indexOf('k'));

let newstring = GameName.substring(0 , 4)
console.log(newstring);

const anotherstring = GameName.slice(1 , -1) 
console.log(anotherstring);
  
const string1 = "    tanishq    "
console.log(string1.trim());

const url = "https://tan.com/tan%20gar"
console.log(url.replace('%20' , '-' ));

console.log(url.includes("sunday"));



