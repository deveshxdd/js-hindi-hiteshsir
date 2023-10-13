//---> hum agar object ke andar prototype define krte hai to wo savi ke lia valid hota hai <---//

let str = "devesh    "

Object.prototype.truetrim = function(){
    console.log(`${this.trim().length}`)
}
console.log(str.truetrim());
const arr = ["spiderman  " , "thor   "]
arr[1].truetrim()
