// if 
const temperature = 41

// if(temperature<50){
//     console.log("Temperatue is less than 50");
// }
// else{
//     console.log("Temperature is greatear than 50");
    
// }

const score = 200
if(score>100){
    let power = "Fly"
    console.log(`User power is ${power}`);
    
}

const balance = 1000
//if(balance > 500) console.log("test") , console.log("test2");  //implicit scope   // wrong way to write because code readibility is low

if(balance < 500){
      console.log("less than 500");
} else if(balance<750){
     console.log("less than 750");
}  else if(balance<950){
      console.log("less than 950");
}   else {
    console.log("less than 1200");
    
}

const isUserLoggedin = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedin && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(("User is looged in "));
    
}