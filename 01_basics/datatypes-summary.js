// Data Type in js two type 
// 1. Primitive 
// 2. reference (non primitive)


// 1. Primitive 

// 7 types : String, Number, Boolean ,null , undefined, symbole , bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 243532465657547346742345n

// 2. Reference 
// array, object , functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name: "akshay",
    age: 22,
}

const myfunction = function(){
    console.log("hello world")
}



//  **************************************

// Stack memory(Primitive) , Heap memory(Non-primitive)

let myYoutubename = "akshayyadav"

let anothername  = myYoutubename
anothername = "kumarakshay"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

userTwo = userOne

userTwo.email = "akshay@google.com"

console.log(userOne.email);
console.log(userTwo.email);