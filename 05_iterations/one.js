//for

// for (let i = 0; i< 10; i++) {
//     const element = i;
//     if(i === 5) console.log(`${element} is the best number`);
    
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Table of ${i} is`);
    
//     for (let j = 0; j < 10; j++) {
//         // console.log(`outer loop value is ${i} and inner loop value is ${j}`);
//         console.log(i + '*' + j + ' = ' +i*j);
        
//     }
    
// }

let arr = ["batman", "supreman" , "flash"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
   // console.log(element);
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        continue
    }
    if (i == 10) {
        break
    }
    console.log(`${i}`);
}