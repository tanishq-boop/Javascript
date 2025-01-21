// Immediately Invoked Function Expression
// is used for immediate execution and avoiding global scope pollution 


(function chai(){                   // named iife
    console.log(`DB connected`);  //semi-colon is used so function knows when to end its execution 
    
})()

//()()      // First parenthesis is used function definition and second parenthesis is used for immediate execution

(() => {                               //normal iffe
    console.log(`DB2 Connected`);
    
})()


((name) => {                               //normal iffe
    console.log(`DB2 Connected for ${name}`);
    
})('Tanishq')