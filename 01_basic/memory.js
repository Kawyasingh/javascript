//stack(primitive) , heap(non-primitive)

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiuarcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo =userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
