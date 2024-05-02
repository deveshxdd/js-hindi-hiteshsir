// stack (primitive)
// heap (non primitive)
let myname = "devesh"
let newname = myname // ye upar wale ki copy value lega 
newname = "aakash" // isse myname change nhi hoga
console.log(myname)
console.log(newname)
let userone ={
email: "iamdevesh@gmail.com",
upi : "devesh@ybl"
}
let usertwo = userone // ye heap me uski reference lelega aur isme change krenge to original me change hoga 
//kyuki ye copy value nhi leta hai
usertwo.email = "hjfdjf"
usertwo.upi = "ybbl"
console.log(userone.email)
console.log(userone.upi)


// heap ->>> takes refernce 
// stack ---> takes copy value