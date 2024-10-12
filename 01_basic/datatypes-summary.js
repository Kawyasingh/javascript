// primitive

// 7 types: string, number , boolean , null ,undefined, symbol,BigInt 

const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =  343637788839n  // n represnt bigint




// refrence (Non primitive)

// array, objects,functions

const heros =["shaktiman","naagraj","doga"]
{
    name: "hitesh"
    age : 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);