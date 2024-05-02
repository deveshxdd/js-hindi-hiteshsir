function user(username , college , branch)  // agar yaha ki variable niche laani h to this use hoga
{
   this.username = username
   this.college = college
   this.branch =  branch 

}   // ---> this is constructer function
// this method matlab jisne v bulaya h uske paas chale jaao
// agar hum khud ka prototype banana chahte hai to bana skte hai
user.prototype.detail = function(){
    console.log(`hey my name is ${this.username} college is ${this.college} and branch is ${this.branch}`)
}
const usr1 = new user("devesh" , "glbajaj" , "it")
const usr2 = new user("dev" , "glbajaj" , "cse")
 // agar prototype banana hai to object bnana pdega new jo h wo ek new object create krta h
 usr1.detail()
 usr2.detail()
 // so hum function ke lia v alag se prototype bana skte h 
//  saare chiz jaise array , string , function object ho skte h 
//  agar Object ke anadar hum prototype banaenge to wo sbke lia valid hoga
////---------> INHERITENCE <-------------////
// ek ki property dusre me assemble krna //
const obj1 ={
    name: "devesh" ,
    class: "nursery"
}
const obj2= {
college: "glb",
branch: "civil",
__proto__: obj1
}
const obj3 ={
address: "kushinagar",
hostel: "bnd"
}
obj2.__proto__.obj3   // to inherit the objects we use proto

console.log(obj2.name)
console.log(obj3.address)

//// proto is used to inherit the objects 
