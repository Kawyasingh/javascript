const userEmail = []

if (userEmail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

// falsy value

// false,0,-0,BigInt 0n, "",null,undefined,NaN 

//truthy values
//"0", 'false'," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

// Nalluish Coalescing Operator(??): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined??15
val1=null??10??20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceteaPrice = 100
iceteaPrice >= 80?console.log ("less then 80"):console.log("more then 80")