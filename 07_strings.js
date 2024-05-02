const name = "devesh"
const age = 20
console.log(name+age) //this is old way of concatination
// new way of concatination is 
const yourname = "deveshh"
const yourage = 20
//if you want to concatinate it 
console.log(`hii my name is ${yourname} and my age is ${yourage}`) //always use this method 
// string ko humlog agar class banake kre to hame bahut jyada inbuilt proto methods mil jate hai
const newstr = new String('dev-esh')
console.log(newstr.toUpperCase())
console.log(newstr.length)
console.log(newstr.trim()) // spaces trim krta hai 
console.log(newstr.charAt(5))
console.log(newstr.indexOf('v'))
console.log(newstr.replace('v' , 'i'))
console.log(newstr.substring(1,4))
console.log(newstr.slice(-5,5))
console.log(newstr.split('e'))
devesh20
// hii my name is deveshh and my age is 20
// DEV-ESH
// 7
// dev-esh
// s
// 2
// dei-esh
// ev-
// v-e
// [ 'd', 'v-', 'sh' ]
//outputs