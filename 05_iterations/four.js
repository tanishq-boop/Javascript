const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
   //console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programming = ["java" , "js" , "rb" , "cpp" , "py"]

for (const key in programming) {
    console.log(programming[key]);
    
}