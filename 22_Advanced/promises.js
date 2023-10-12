 
//history of promises
//  jab promises available mhi the fir bydefault use krte the
//  kuch library hoti thi Q and BlueBird jiske andar hum sare wo chaiz
//   use kr skte
//  the jo hum avi krte hai
// Promise ke do part hote hai promise ko consume krna aur banana 
// firstly hum banana sikhenge

const promiseone = new Promise((resolve , reject)=>{
    // do and async task
    // database call
    // cryptography , network call hoskte h
    setTimeout(()=>{
console.log("async task is completed")
resolve()
    },1000)
})

// // consume 
 promiseone.then(()=>{
    console.log("promise consumed")
 }) 
// // .then means resolve  // resolve connected hai then se
new Promise((resolve,reject)=>{
setTimeout(()=>{
   console.log("async task 2") 
   resolve()
},1000)
}).then(()=>{
    console.log("async 2 resolved")    //uske baad hi kaam krna hai
})

const promisethird = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve({
        username: "chai" , email: "chai@chaiaurcode.com"
    })
},1000)
})

promisethird.then((user)=>{
    console.log(user.username)
})      // resolve ke andar jo parameter h usko humlog then ke function ke andar daal skte h

const promisefour = new Promise((resolve,reject)=>{
setTimeout(()=>{
let error = false
if(!error){
    resolve({username:"dev",id:"123"})
}
else{
    reject('error:something went wrong')
}
},2000)
})
// // then connected hai resolve se catch connected hai error se
promisefour.then((userr)=>{
console.log(userr);
return userr.username;   // iska wala return niche wale me jaaega
}).then((username)=>{
console.log(username);
}).catch((error)=>{
console.log(error)
}).finally(()=>{
console.log("the promise is resolved or rejected")
})   // finally is default case ye batata hai ki jo v kaaam hona tha wo hua ki nhi


const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"javascript",id:"123"})
        }
        else{
            reject('error: js went wrong')
        }
        },2000)
        })
// another way of detecting asyncwait
async function wait(){
    try{
    const respo = await promisefive
    console.log("responded")
    }
    catch(e){
        console.log(e)
    }
}
wait()
async function random(){
    try{
    const response = await fetch('https://randomuser.me/api/')
    const res =  await response.json()
    console.log(res)
    }
    catch{
        console.log("invalid api");
    }
}

// niche wale then ko hatane ke lia async use krte hai
 function randomm(){
     fetch('https://randomser.me/api/').then((val)=>{
        return val.json()
     }).then((ans)=>{
        console.log(ans)
     }).catch((v)=>{
        console.log("invalid api")
     })
    
}
random()
randomm()