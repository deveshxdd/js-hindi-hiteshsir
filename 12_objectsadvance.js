     //way 2 to declare object //
     const jsuserr = new Object()
     jsuserr.name = "devesh"
     jsuserr.email = "udevesh929@gmail.com"
     jsuserr.id = "1,2,3,4,5"
    //  console.log(jsuserr)
      /// NESTED OBJECTS //
      const obj = {
        email: "rcrvcv" ,
        fullname: {
username:{
    firstname: "devesh" ,
    lastname: "upadhyay"
}
        }
      }
    //   console.log(obj.fullname.username.firstname)
        /// how to merge two objects
        const obj1 = {
            name: "dev" ,
            email: "iamrrc"
        }
        const obj2 = {
            username: "dev" ,
            id: "iamrrc"
        }
        // const obj3 = {obj1 , obj2}
        // console.log(obj3)  this is not good way to combine
        // const obj3 = Object.assign({}, obj1 , obj2 , obj)
        // console.log(obj3);  this is also not a good way
        // best way spread 
        const obj3 = {...obj1 , ...obj2}
        console.log(obj3);
        // most important concept
        console.log(Object.keys(jsuserr));
        console.log(Object.values(jsuserr));
        console.log(Object.entries(jsuserr ));
        // this meathod converts the object value into array
        // further we can use loops  