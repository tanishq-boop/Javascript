let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

//let mycreateddate = new Date(2024,0,24)  //when given in array format months start from 0
 let mycreateddate = new Date("01-21-2024")
//  console.log(mycreateddate.toString());
 
 let mytimestamp = Date.now() // gives time in milliseconds from january 1970
//  console.log(mytimestamp);
 //console.log(Math.floor(mycreateddate.getTime()/1000)); // divided by hundred to get time in seconds
 
 let newdate = new Date()
 console.log(newdate);
 console.log(newdate.getMonth()+1); // month starts from 0 in js
 console.log(newdate.getDay());
  

newdate.toLocaleString('default',{
    weekday:long
})
