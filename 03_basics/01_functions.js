
function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("v");
    console.log("y");
    console.log("a");

}

//sayMyName

function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

console.log("Result:", result);

function loginUserMessage(username){
    if (username===undefined){
        console.log("please enter a username");
        return

    }
    return `${username}just logged in`
}

//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("hitesh")) 

function calculatCartPrice(...num1){
    return num1
}

//console.log(calculatCartPrice(200,400,500,2000))

const user ={
    username:"hitesh",
    pices:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and pice is ${anyObject.pice}`);
}

//handleObject(user)
handleObject({
    username : "sam",
    pice:399
})

const myNewArray = [200,400,100,600] 

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));