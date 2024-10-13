// singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const jsUser ={
    name : "Hitesh",
    "full name":"Kavya singh",
    [mySym]:"myKey1",
    age : 18,
    email:"kawya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])

jsUser.email = "Kawya@papa.com"
//Object.freeze(jsUser)
jsUser.email = "kawya@hppy.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}



jsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());