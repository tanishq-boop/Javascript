const coding = ["java" , "js" , "rb" , "cpp" , "py"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) =>  {
//     console.log(item);
// })

// function PrintMe(item){
//     console.log(item);   
// }

// coding.forEach(PrintMe)


// coding.forEach( (item , index , arr) =>  {
//     console.log(item ,index ,arr);
//  })

const myCoding =[
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
        languageName : "java",
        languageFileName : "java"
    }, 

    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )

