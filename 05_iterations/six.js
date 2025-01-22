const coding = ["java" , "js" , "rb" , "cpp" , "py"]

const values = coding.forEach( (items) => {
    console.log(items);
    return items                           //  ==> Give soutput as undefined
 })

 console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const NewNums = myNums.filter( (items) => items >4)  // filter works just like for each function but is used because forEach function doesn't return values

//  const NewNums = myNums.filter( (items) => {         // if curly braces are used a scope is started and it becomes necessary to 
//                                                       //use the keyword return
// return items >4})


const newNums = []
myNums.forEach( (num)=> {
    if (num > 4) {                     /// to return values through forEach function
    newNums.push(num)
    }
})

 console.log(NewNums);
 
 