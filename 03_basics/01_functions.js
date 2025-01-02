function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("Q");
}
//sayMyName()  // without parenthesis we only give reference of functions

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }  // this function does not return the value of sum it simply gives the output of sum

function addTwoNumbers(number1 , number2){
// let result =number1 + number2
// return result
return number1 + number2
}

// const result = addTwoNumbers(3 ,3);
// console.log("Result : ",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please Enter a name");  // !username or username === undefined is the same thing
        return                               // this return is used so that when if conditon is used statement below is not executed
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(...num1){        // ... is rest operator
return num1
}

// console.log(calculateCartPrice(200,400,600));

const user = {
    username : "Tanishq",
    price : "1099"
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} amd price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username  :"sam",
//     price  : 400
// })

const myNewArr = [200,400,600,800]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArr));
