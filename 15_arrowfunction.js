const company = {
    username: "devesh",
    designation: "software developer",
    welcomemessage : function(){
        console.log(`${this.username} welcome to our company`)
    }
}
company.welcomemessage()
// ------->  output (devesh welcome to our company) <-----------
const companyy = {
    username: "devesh",
    designation: "software developer",
    welcomemessage : function(){
        console.log(`${this.username} welcome to our company`)
        console.log(this)
    }
}
companyy.welcomemessage()
// ----->   output    <-----------
// devesh welcome to our company
// {
//   username: 'devesh',
//   designation: 'software developer',
//   welcomemessage: [Function: welcomemessage]
// }
console.log(this)  //---> output {}  (node environment )
function dev(num){
    console.log(this.num) // undefined
}
dev(7)   //this is not used in function
         //----> 3 ways to declare function <----- \\\
         function namee(){
            console.log("way 1")
         }
         namee()



         const naam = function(){
            console.log("2nd way")
         }
         naam()


         /////  ----->  Arrow function <--------////
         const num = () => {
            console.log("3rd way")
         }  
                num()


        const nuum = (num1 , num2) => (num1+num2)  //agar implicit return krna ho mtlb 1 to hum sidhe arrow laga ke krskte h
        console.log(nuum(1,3))

        
        //---><---//


        const newnum = (num1,num2) => ({name:"devesh" , classs:"5"}) //agar object ko arrow function se return krwana hai to
        //() ye lagana pdega
        console.log(newnum(1,2))


        ////  this in arrow  ////
        const thus = (num)=>{
            console.log(this.num)  //  it give undefined
        }
        thus(4); 
        // output {} 
// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION //
// IT IS USED ----> IMEEDIATE RESPONSE KE LIA
// ------> KAI BAAR GLOBAL SCOPE SE FUNCTION ME PROBLEM HOTA HAI 
(function deve(){
    console.log(`iife connected1`);
})();
//agle function ko likhne ke lia ye ; lagana jruri hai
// unnamed IIFEE
( ()=>{
    console.log("devedh")
})()
