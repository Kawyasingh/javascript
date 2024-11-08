//if
// const isUserloggedIn = true
// const temperature = 41

// if( temperature===40){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater tha 50");
// }
// console.log("execute");
//<,>,<=,>=,==,!=,===


// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`user power:${power}`);
// }

// console.log(`user power:${power}`);


// const balance = 1000

// if (balance > 500) console.log("test");
// console.log("test2");

// if (balance<500){
//     console.log("less than");
// }else if (balance <750){
//     console.log("less than 750");
// }else if (balance <900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const UserloggedIn = true 
const debitcard = true
const loggedInFromGoogle = false
const logggedInFromemail = true

if(UserloggedIn && debitcard&&2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || logggedInFromemail){
    console.log("user logged in");
}