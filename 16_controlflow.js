const num = 40
if(num>50){
    console.log("entry accepted")
}
else{
    console.log("else")
}
const age = 20
if(age>18){
    console.log("drive")
}
else if(age<18){
    console.log("you cant drive")
}
else if(age>60){
    console.log("cant drive")
}
else{
    console.log("invalid number")
}
////----->  && and || <-------------//
// ---->  && dono sahi hoga tavi chalega wrna nhi chalega
//  --->  || dono me se koi ek v shi hoga to chalega
const username = false
const email = false
if(username&&email){
    console.log("executed")
}
if(username == true || email == true){
    console.log("executedd")
}
               // SOMETIME KUCH KO PHLE SE TRUE MANA JATA H TRUTHY AUR KUCH KO PHLE SE GALAT FALSY
    // FALSY -> "" , 0 , -0 , 0N , NULL , UNDEFINED , NAH , FALSE
    // truthy -> [] , {} , empty function , "anything written", "0"
    const namee = "devesh"
    if(namee){
        console.log("executed")
    }
// //check if it is empty or not object
const namu = {

}
if(Object.keys(namu).length==0){
    console.log("empty")
}
const month = 5
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;

    default:
        console.log("invalid input")
        break;
}
  /// nullish coalescing operator ///
  /// ye use hota hai during database jab database se koi chiz arhhi to ki agar aae to ye wrna ye
let val1
val1 = null??1
console.log(val1)  // output 1
let val2 
val2 = null ?? 10 ?? 12   //jo phle aaega number wahi hoga execute 
// nullish coalescing opertor is a game of null and undefined
// -------->  ternary operator  <---------------- //
// syntax condition ? true : false 
const valee = 40
valee > 60 ? console.log("true") : console.log("false")