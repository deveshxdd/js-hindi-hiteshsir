const userprofile = {
    username: "devesh",
    userid: "123abc" ,
    userfunction: function(){
        console.log(`this is ${this.username} and my id is ${this.userid}`)   // this use hota hai batane ke lia ki ye variable kis context ka h
    }
}
console.log(userprofile.userfunction())
// oops stands for object oriented programming 
// object stands for collections of properties 
// we will study 
// function constructer 
// instances - > new , this 
// class 
// class keywords
// prototypes
function devesh(username,id,college,company){
    this.username = username
    this.id = id
    this.college = college
    this.company = company

    console.log(`my name is ${username},id is ${id} college is ${college} and company is ${company}`)
}
const fn1 =  new devesh("devesh",1221,"glbajaj","amazon")
const fn2 =  new devesh("deveshhh",1221,"glbahhjaj","amahhzon")
console.log(fn1)

// jaise hi hum new keyword use krte hai ek new object create hota hai 
// constructer reference hota hai khud hi ke baare me 

