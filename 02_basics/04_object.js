// const tinderuser = new Object()  // singelton object
const tinderuser = {} // non singelton object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedin = false

// console.log(tinderuser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userName : {
                    firstname : "Tanishq",
                    lastname: "Agarwal"
        }
    }
}

// console.log(regularUser.fullName.userName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = Object.assign({},obj1,obj2)  // {} is the target object in which all other source objects are merged , if not given obj2 merges in obj1

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id : 1,
        email : "t@gmail.com"
    },
    {
        id : 2,
        email : "t@gmail.com"
    },
    {
        id : 3,
        email : "t@gmail.com"
    },
    {
        id : 4,
        email : "t@gmail.com"
    }
]

// console.log(users[0].id);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "JS in hindi",
    coursepprice  : 999,
    courseteacher : "Hitesh Choudhary"
}

const{courseteacher : instructor} = course;  // for easier access of values

console.log(instructor);
