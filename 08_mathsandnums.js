// const num = 40
// const newnum = new Number(200.5)
// console.log(num)
// console.log(newnum)
// console.log(newnum.toString().length)
// console.log(newnum.toPrecision(2))
// console.log(newnum.toFixed(10))
// console.log(newnum.toLocaleString())  /// 100000000 to ye ise 1,00,0000 isss tarike se convert karega
console.log(Math.floor(1.88888))
console.log(Math.ceil(1.3))
console.log(Math.round(4.6))
console.log(Math.abs(-444))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5,6))
console.log(Math.random()) // ye zero se 1 ke bich ki random value nikal ke deti hai
console.log((Math.random()*10) + 1) // 1-10 ke bich me de 
console.log((Math.random()*10) + 1) // 1-10 ke bich me de with decimal 
console.log(Math.floor((Math.random()*10) + 1)) // 1-10 ke bich me de without decimal 
// agar hum chahte hai ki fix range tak value mile 
const max = 20
const min = 10
console.log(Math.floor((Math.random()*(max-min+1))+10)) // isse humlog kisi v range tak ki value nikal skte h 
//OUTPUT
// 1
// 2
// 5
// 444
// 1
// 6
// 0.9248887647747082
// 3.1168736767058793
// 10.356365452716433
// 7
// 14