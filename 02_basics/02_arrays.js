const marvelheroes = ["Ironman", "Thor", "spiderman"]
const dcheroes = ["Flash" , "Batman" , "Cyborg"]

//marvelheroes.push(dcheroes)

// console.log(marvelheroes);
// console.log(marvelheroes[3][0]);  // To access the element flash
 
const allHeroes = marvelheroes.concat(dcheroes)
console.log(allHeroes);  

const all_heroes = [...marvelheroes,...dcheroes]
console.log(all_heroes);

const anotherarray = [1,2,[3,4],[5,[6,7]]]
const another_array = anotherarray.flat(Infinity)
console.log(another_array);

console.log(Array.isArray("Tanishq"));  // isArray checks wether the given argument is a array or not
console.log(Array.from("Tanishq"));     // from converts given argument into array
console.log(Array.from({name:"Tanishq"}));     // gives empty array because it doesn't know wether to convert key or value to string

let score1 = 100
let score2 = 200  
 console.log(Array.of(score1 , score2))
