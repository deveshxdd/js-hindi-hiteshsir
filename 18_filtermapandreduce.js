
//////IMPORTANT METHODS ////

const arr  = [1,2,3,4,5,67]
// const num = arr.forEach((n)=>{
//     console.log(n)
//     return n
// })
// console.log(num);   // for each donot return anything 
     //--->  FILTER SAME AS FOR EACH BUT IT RETURNS AND WE CAN FILTER OUT TOO <------//
     const num = arr.filter((n)=>{
        return n>3
     })
    //  console.log(num)    // ek array return krdega aur hum conditions laga skte hai
const obj  =  [
    {
        name: "rrr" ,
        type: "patrotric" ,
        year: 2022 ,
    },
    {
        name: "simbha" ,
        type: "patrotric",
        year: 2020,
    },
    {
        name: "fightclub" ,
        type: "motivational" , 
        year: 2021 ,
    },
    {
        name: "rambo",
        type: "motivational",
        year: 2020,
    },
    {
        name: "golmal",
        type: "comedy",
        year: 2021,
    }
]
const yeary = obj.filter((yearr)=>{
return yearr.year > 2021
})
// console.log(yeary)

 /////// -----> MAPS SAME AS FILTER BUT IT RETURNS ALL <--------////
  const movies = obj.map((mov)=>(mov.year+1))
  console.log(movies);   /// ye directly pura return krta h 

  //////////////---------> REDUCE METHOD YE THODA ALAG HOTA HAI <----------///
  // ISKE ANDAR HUM DO CHIZ PAAS KRTE HAI EK ARG AUR EK VALUE AGAR ADD KRNA HO//
  const objj  =  [
    {
        name: "rrr" ,
        type: "patrotric" ,
        price: 199 ,
    },
    {
        name: "simbha" ,
        type: "patrotric",
        price: 200,
    },
    {
        name: "fightclub" ,
        type: "motivational" , 
        price: 299,
    },
    {
        name: "rambo",
        type: "motivational",
        price: 399,
    },
    {
        name: "golmal",
        type: "comedy",
        price: 499,
    }
]
 // cart for total movies
 const cart = objj.reduce((arg,val)=>(arg+val.price),0)
console.log(cart)  // ye generally carts banate time use hota hai //