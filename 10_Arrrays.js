// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr[2])
// console.log(arr.length)
// arr.push(6) // last me ek add hoga
// arr.push(7) 
// arr.pop() // last me se ek hatt jaaega
// arr.unshift(10) //suru me ek add hoga
// arr.unshift(100)
// arr.shift()  //suru se ek hatt jaega
// console.log(arr) 
// console.log(arr.includes(3)) //true or false dega 
// console.log(arr.indexOf(2)) 
// const myyarr = arr.join() // array ko string me krderha convert
// console.log(typeof myyarr) // string
// console.log(myyarr) // string
//OUTPUTS
// [ 1, 2, 3, 4, 5 ]
// 3
// 5
// [
//   10, 1, 2, 3,
//    4, 5, 6
// ]
// true
// 2
// string
// 10,1,2,3,4,5,6
 //---->SLICE AND SPLICE IN ARRAY<------//
//  let arr = [1,2,3,4,5]
//  console.log(arr)
//  let arr1 = arr.slice(1,3) // ye last-1 tak jata hai
//  let arr2 = arr.splice(1,3) // ye last tak jata hai
//  console.log(arr1)
//  console.log(arr2)
//  console.log(arr)   // isme change dikhega kyuki reference leta hai 
 //OUTPUTS
//  [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]
// [ 2, 3, 4 ]
//[ 1, 5 ]

//HOW TO CONCATINATE TWO ARRAY 
//WAY 1
let heroes = ["dev","akas","sande","ritik","tank"]
let newhero = ["div","saw","nites","ujjwal"]
// heroes.push(newhero)
// console.log(heroes)
//output
// [
//     'dev',
//     'akas',
//     'sande',
//     'ritik',
//     'tank',
//     [ 'div', 'saw', 'nites', 'ujjwal' ]
//   ]  ---> isme last me ek array ke form me add hogya h jo shi way nhi h 
//------> WAY 2 <-------//
// let newheros = heroes.concat(newhero)
// console.log(newheros)
//output
// [
//     'dev',    'akas',
//     'sande',  'ritik',
//     'tank',   'div',
//     'saw',    'nites',
//     'ujjwal'
//   ]
  // ye accha tarika hai 
// -------> WAY 3 <---------//
console.log(...heroes , ...newhero)  //iska type string hota hai ye generally dono array ko spread krke 
// print krdeta hai
//outputs 
// dev akas sande ritik tank div saw nites ujjwal 
let arr = [1,2,3,4,[1,2,3[1,6,7,8,10]],5] //agar aisa array diya ho aur sbko alag alag lena ho
let newarr = arr.flat(Infinity) // ye new array me assign hone ke pr use hota hai 
console.log(newarr)
// check array or not 
console.log(Array.isArray(["devesh","aakash"])) // ye batata hai ki ye array h ki nhi 
console.log(Array.from("devesh")) // ye ise array me convert krdega
//side object ko array me convert nhi krskte hai
let n = 100
let m = 100
let o = 100
let p = 100
console.log(Array.of(n,m,o,p))
//output
// [ 1, 2, 3, 4, 1, 2, undefined, 5 ]
// true
// [ 'd', 'e', 'v', 'e', 's', 'h' ]
// [ 100, 100, 100, 100 ]