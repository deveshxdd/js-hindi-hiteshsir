// function names(){
//     console.log("devesh")
// }
// names()  //basic syntax and call 
// parameter and arguments //
// function define krte time jo value lete h use parameter 
// function declare krte time jo value lete hai use arguments 
// function Sum(num1,num2){
// console.log(num1+num2);
// }
// // Sum(2,4)  // agar tum isko chaho to variable me v store krskte ho
// let ans = sum(2,4) 
// console.log(ans) //ye kuch v print nhi krega kyuki function kuch return nhi krrrha call krne prr
            //  FUNCTION  RETURN SOMETHING
            function sum(num1 , num2 , num3){
                return num1+num2+num3
            }
            console.log(sum(2,3,4))   //return krta h to use print krwana hoga
            function users(username){
                if(!username){
                    console.log("enter user name first");
                    return
                }
                return `${username} just loggedin`
            }
            console.log(users())  // humne ek string daal diya 
             // agar kitne argumnets lene hai wo fix na ho
             // we use dot operator or spread operator
             function addtocart(...num){
                return num
             }
             console.log(addtocart(100,2000,200000,449))
             let mypage = {
                pagename: "devesh" ,
                pageid: "dev222"
             }
            //  }
            //  function pages(objectsss){
            //     return objectsss
            //  }
            //  pages({
            //     name:"devesh",
            //     id: "232242"
            //  })
            //  console.log(pages({
            //     name:"devesh",
            //     id: "232242"
            //  }))
            //  console.log(pages(mypage))
            // function myarray(arry){
            //     return arry[1]
            // }
            // console.log(myarray([12,3,4,555,5,66,6]))
            function myobj(objjj){
                console.log(`the name is ${objjj.pagename} and id is ${objjj.pageid}`);
            }
           myobj(mypage)
           //another way of writing function
           const fucn = function(num){
            return num+3
           }
           console.log(fucn(5))
           