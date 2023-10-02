// for of is used to get value for all type except object 
// with the help of for of loop we can get elements 
//syntsx
const arr = [1,2,3,4,5,5]
for (const val of arr) {   //ye bina dekhe array ke andar ki value ko print kredega
    // console.log(val)
}
const str = "devesh"
for (const valu of str) {
    // console.log(valu)
}
 /// MAP IS A OBJECT 
 const map = new Map()
 map.set("name" , "devesh")
 map.set("namee" , "deveshh")
 map.set("nameee" , "deveshhh")
 map.set("nameeee" , "deveshhhh")
//  console.log(map);  
 // map me unique value aur key hi lete hai koi v value same nhi leskte h ek hi baar krega print
 for (const val of map) {
    // console.log(val)
 }
 //output of map 
//  [ 'name', 'devesh' ]
// [ 'namee', 'deveshh' ]
// [ 'nameee', 'deveshhh' ]
// [ 'nameeee', 'deveshhhh' ]
// agar hum chahte h kuch aur tarike se print hoto
for (const [key , value] of map) {
    // console.log(key ,"-", value)
 }


 // in object for of is not iterable we use for in
 const obj = {
    name:"dev",
    class: "ukg",
    rollno: "10"
 }
 for (const key in obj) {
//    console.log(`${key} ${obj[key]}`);
 }
 const a = [1,2,3,4,6]   // for in gives key value of array jisse nikalna pdta h
 for (const k in a) { 
    // console.log(a[k]);
 }

 // CONCEPTS OF FOR EACH
 const code = [12,1,3,14,1,5,16] 
 code.forEach(function(name){  //isse code ke andar ki sari value wo as a parameter use hongi function me
console.log(name)
 })
//   code.forEach() iske andar kisi dusre function ka reference v deskte hai for each ke function ke andar jo parameter 
//   hota hai uske paas 3 access hoti h item index and array pura