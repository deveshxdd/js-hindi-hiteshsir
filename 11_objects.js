// we generally declare objects in two ways 
// using literal
// creating objects
//object.create way 2
//    WAY1  //
const mysymbol = Symbol("key1")  // way to represent symbol
const jsuser = {
    name : "devesh"
    , id: "12121" ,
[mysymbol]: "keyvalue",
    email: "iamdevesh@gmail.com" ,
    college: "gl bajaj " ,
    marks: [1,2,3,4],
    greet: function(){
        console.log(5+5)
    }
}
// how to access 
console.log(jsuser.college)
console.log(jsuser.email)
console.log(jsuser["id"])
console.log(jsuser["marks"]) // two ways to access
console.log(jsuser[mysymbol])
jsuser.email = "devesh@gmail.com"
console.log(jsuser)
// Object.freeze(jsuser)  /// from this we can lock the object we cannont change anything after this
jsuser.email = "devesh@gmaifrefcerferl.com"
console.log(jsuser)
jsuser.greeting = function(){
    console.log(`this is ${this.name}`)
}
console.log(jsuser.greeting())


 