const user = {
    username : "Tanishq",
    price : 999,

    welcomeMessage: function(){
        console.log(`${username},welcome to website`);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "jon"
// user.welcomeMessage()

// console.log(this);

// const chai = function(){
//     let username = "Tanishq"
//     console.log(this.username);
    
// }


const chai = () => {
    let username = "Tanishq"
    console.log(this.username);
    
}

// const addTwo = (num1 , num2) => {
//       return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2   
//const addTwo = (num1 , num2) => (num1 + num2)                                                                                 //both formats are correct but the second one is mostly used because objects can't be accessed this way  

const addTwo = (num1 , num2) => ({username : "tanishq"})