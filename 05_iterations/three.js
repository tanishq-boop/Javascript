// for of


//[{},{},{}]        objects within array

const arr= [1,2,3,4,5]

for (const num of arr) {
// console.log(num);
}

const greeting ="Hello World"
for (const greet of greeting) {
//    console.log(`Each char is ${greet}`);
}


//Maps

const map = new Map()
map.set("IN" , "India")
map.set("IN" , "India")  //  doesn't print value of india twice map only considers unique pair
map.set("CN" , "China")
map.set("Fr" , "France")

//console.log(map);

for (const [key , value] of map) {
    //console.log(key ,':-', value); 
}

const myObj = {
    'game1' : 'NFS',
    'game2' : "Spiderman"
}

// for (const [key , value] of myObj) {      forof loop doesn't work on obects
//     console.log(key ,':-', value); 
// }