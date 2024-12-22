const myarr = [0,1,2,3,4,5]
const heroes = ["Jethalal", "shaktiman","Clark kent"]

const myArr2 = new Array(0,1,2,3,4,5)
//console.log(myArr2[0]);

//Array method

// myarr.push(9)   // push adds the arguments to th earray 
// myarr.push(6)
// myarr.pop()    // pop removes the last element of the array

// myarr.unshift(9)  // adds the arguments to the start of the array
// myarr.shift()     // removes the first element of the array 


// console.log(myarr.includes(9));
// const newArr = myarr.join()   // converts the array to string datatype 
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A=",myarr);

const myn1 = myarr.slice(1,3)
const myn2 = myarr.splice(1,3)  // splice cuts the array and takes the number of value sinstead of index

console.log(myn1);
console.log(myn2);

console.log("B=",myarr);









