const rectangle = document.querySelector('#center')
// ab calculate karo ki hum center se left pe hai ya right pe hai
// color - rgb(255,255,255)
// range 0-255
rectangle.addEventListener('mousemove',(details)=>{
let rectlocation = rectangle.getBoundingClientRect();
let insiderect = details.clientX-rectlocation.left
if(insiderect < rectlocation.width/2){
    console.log(insiderect);
   var redcolor =  gsap.utils.mapRange(0,rectlocation.width/2,255,0,insiderect)
//    console.log(redcolor);
// gsap.to(rectangle , {
//     backgroundColor: `rgb(${redcolor},0,0)`
// })
rectangle.style.backgroundColor = `rgb(${redcolor},0,0)`
}
else{
    // console.log("right")
    var redcolor =  gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,0,255,insiderect)
    //    console.log(redcolor);
    // gsap.to(rectangle , {
    //     backgroundColor: `rgb(0,0,${redcolor})`
    // })
    rectangle.style.backgroundColor = `rgb(0,0,${redcolor})`
}


})
rectangle.addEventListener('mouseleave',()=>{
    rectangle.style.backgroundColor = 'white'
})