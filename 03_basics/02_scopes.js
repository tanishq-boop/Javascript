function one(){
    const username ="Tanishq"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
//console.log(website);  // website variable is defined withiin the scope of function two so its a local variable and is not executable


    two()
}
one()

if(true){
    const username ="Tanishq"
    if(username === "Tanishq"){
        const website = "Youtube"
        //console.log(username + website);
        
    }
}
//console.log(username);

addone(5)                              // function can be called before declaring but it cannot be called before initialising .  
                                      // If function is called before when initialised as a variable it won't be executed  

function addone(num1){
    return num1 + 1
}

addtwo
function addtwo(num2){
    return num2 + 2
}
