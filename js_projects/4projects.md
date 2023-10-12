# JS PROJECTS ON DOM AND EVENTS
# PROJECT 1 COLOR SWITCHER 
## http://127.0.0.1:5500/4_projects/coloroptimixe.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .btn{
            font-size: xx-large;
            border-radius: none;
            border: none;
            padding: 20px;
            margin: 3px;

        }
        #green{
            background-color: green;
        }
        #yellow{
background-color: yellow;
        }
        #red{
background-color: red;
        }
        #blue{
background-color: blue;
        }
    </style>
</head>
<body>
    <div class="main">
        <button class="btn" id="green">green</button>
        <button class="btn" id="yellow">yellow</button>
        <button class="btn" id="red">red</button>
        <button class="btn" id="blue">blue</button>
    </div>
</body>
<script>
    const back = document.querySelector('body')
    const btns = document.querySelectorAll('.btn')
    btns.forEach((b)=>{
        console.log(b)
        b.addEventListener('click' , function(e){
            console.log(e.target)
            if(e.target.id == "green"){
                back.style.backgroundColor = e.target.id
            }
            if(e.target.id == "yellow"){
                back.style.backgroundColor = e.target.id
            }
            if(e.target.id == "red"){
                back.style.backgroundColor = e.target.id
            }
            if(e.target.id == "blue"){
                back.style.backgroundColor = e.target.id
            }
        })
    })
</script>
</html>
``````
# PROJECT 2 BMI CALCULATOR
## http://127.0.0.1:5500/4_projects/bmicalculator.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        #wei{
            color: #262626;
            font-size: large;
            font-weight: bold;
            text-align: center;
            border-color: brown;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #hei{
            color: #262626;
            font-size: large;
            font-weight: bold;
            text-align: center;
            border-color: brown;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }
        #selector{
            color: black;
            font-size: larger;
            font-weight: bolder;
        border-color: brown;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #btn{
            color: rgb(27, 13, 3);
            font-size: larger;
            font-weight: bolder;
            background-color: rgb(249, 101, 131);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #textt{
            font-size: larger;
            font-weight: bolder;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            
        }
        #main{
            background-color: antiquewhite;
      
        }
    body{
        background-color: antiquewhite;
    }

    </style>
</head>
<body>
    <div id="main"> 
   <!-- AGE <input  type="number" value="0" min="1" max="100">  -->
   <select name="" id="selector"><option value="adult">ADULT AGE 20+</option>
    <option value="child">CHILD AGE 2-19</option></select>
   <br>
   <br>
   WEIGHT <input id="wei" type = "text" placeholder="POUNDS" >
HEIGHT <input id="hei" type = "text" placeholder="INCHES" >
<br>
<br>
<button onclick="calculater()" id="btn">CALCULATE</button>
<p id="textt">BMI IS : </p>
</div>
</body>
<script> 
const ans = document.querySelector('#textt')
const button = document.querySelector('#btn')
button.addEventListener('click',function(n){
        const weight = document.querySelector('#wei').value
  
    const height = document.querySelector('#hei').value
const bmi = 703*(weight/(height*height)) 
console.log(bmi)
const ans = document.querySelector('#textt')

if(bmi<=18.4)
ans.innerHTML = `YOUR BMI IS 😥 ${bmi.toFixed(2)} UNDERWEIGHT`


else if(bmi>=18.5&&bmi<=24.9){
    ans.innerHTML = `YOUR BMI IS 🤗 ${bmi.toFixed(2)} NORMAL`
}
else if(bmi>=25&&bmi<=39.9){
    ans.innerHTML = `YOUR BMI IS 😥 ${bmi.toFixed(2)} OVERWEIGHT`
}
else if(isNaN){
    ans.innerHTML = "ENTER VALID HEIGHT AND WEIGHT"
}
else{
    ans.innerHTML = `YOUR BMI IS 😥 ${bmi.toFixed(2)} OBESE`

}
})
</script>
</html>

```
# PROJECT 3 DIGITAL CLOCK
## http://127.0.0.1:5500/4_projects/digitalclock.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIGITAL CLOCK</title>
    <style>
        body{
            background-color: #262626;
        }
        .time{
color: aliceblue;
font-weight: bolder;
font-size: xx-large;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }
    </style>
</head>
<body>
    <div class="main">
       <p class="time" id="hours">HOURS</p>
       <!-- <p class="time" id="minutes">MINUTES</p>
       <p class="time" id="sec">SECONDS</p> -->
    </div>
</body>
<script>

    setInterval(() => {
        const date = new Date()
    // console.log(date)
    
        const hour = document.querySelector('#hours')
    // const minute = document.querySelector('#minutes')
    // const second = document.querySelector('#sec')
    // hour.innerHTML = `${date.getHours()} hours`
    // minute.innerHTML = `${date.getMinutes()} minutes`
    // second.innerHTML = `${date.getSeconds()} seconds`
hour.innerHTML= date.toLocaleTimeString()
    }, 1000); //har ek second baad ye function khud ko call krega 
</script>
</html>
```
# PROJECT 4 GUESS THE NUMBER
## http://127.0.0.1:5500/4_projects/guessnumber.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess Number</title>
    <style>
        body{
            background-color: rgb(128, 128, 215);
        }
        #heading{
            color: #1d0b46;
            font-weight: bolder;
            font-style: italic;
            font-size: xx-large;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        }
        #num{
            background-color: #040104;
            color: #fff4f4;
            font-weight: bolder;
            font-style: italic;
            font-size: xx-large;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        }
        #submit ,#reset, #restart{
            background-color: rgb(58, 58, 148);
            color: #faf0f0;
            font-weight: bolder;
            font-style: italic;
            font-size: xx-large;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        }
        #previous , #remaining , #low-high
{
    color: #43194b;
            font-weight: bolder;
            font-style: italic;
            font-size: xx-large;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}   
 </style>
</head>
<body>
    <div class="main">
        <h1 id="heading">GUESS NUMBER GAME</h1>
        <form id="form">
        <input type="text" placeholder="Enter Any Number" id="num">
        <br>
        <br>
        <button id="submit">SUBMIT</button>
        <button id="reset">RESET</button>
        <button id="restart">RESTART</button>
    </form>
    <p id="previous">Previous Guess : </p>
    <p id="remaining">Guess Remaining 10</p>
    <p id="low-high"></p>
    
    </div>
</body>
<script>
   const randomnum = Math.floor(Math.random()*100+1)
   console.log(randomnum) 
   const prev = document.querySelector('#previous')
   const rem = document.querySelector('#remaining')
   const message = document.querySelector('#low-high')
   const num = document.querySelector('#num')
   const reset = document.querySelector('#reset')
   const restart = document.querySelector('#restart')
   const submit = document.querySelector('#submit')
   let prevguess = []
   let guesscount = 1
   let playgame = true
   submit.addEventListener('click',(n)=>{
    n.preventDefault()
    if(num.value<1||num.value>100||isNaN(num.value)){
        alert("invalid input")
        prev.innerHTML = `Previous Guess : ${num.value} `
        guesscount++
        num.value = ''
        rem.innerHTML = `Guess Remaining ${11-guesscount}`
if(guesscount==11){
    alert("gameover")
    resetgame()
}
        
    }
    
    else if(num.value>randomnum){
        
        message.innerHTML = `decrese value`
        prev.innerHTML = `Previous Guess : ${num.value} `
        guesscount++
        num.value = ''
        rem.innerHTML = `Guess Remaining ${11-guesscount}`
        if(guesscount==11){
    alert("gameover")
    resetgame()
}
    }
    
    else if(num.value<randomnum){
        message.innerHTML = `increase value`
        prev.innerHTML = `Previous Guess : ${num.value} `
        guesscount++
        num.value = ''
        rem.innerHTML = `Guess Remaining ${11-guesscount}`
        if(guesscount==11){
    alert("gameover")
    resetgame()
}
    }
    else{
        alert("you guessed it right")
        prev.innerHTML = `Previous Guess : ${num.value} `
        guesscount++
        num.value = ''
        rem.innerHTML = `Guess Remaining ${11-guesscount}`
        if(guesscount==11){
    
    resetgame()
    
    alert("gameover")
}
    }
    

})
function resetgame(){
    num.value=''
    guesscount = 1
    rem.innerHTML = `Guess Remaining ${11-guesscount}`
    // randomnum = Math.floor(Math.random()*100+1)
    // document 
    //         .getElementById("submit") 
    //         .addEventListener("click", (event) => { 
    //             event.preventDefault(); 
    //         }); 
    message.innerHTML = `Restart the game`

}
  
</script>
</html>

```
# Project 5 (Background color stop and start)
## [http://127.0.0.1:5500/2_async_Project/asyncset.html]
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="text">COLOR CHANGING </h1>
    <button id="btn1">start</button>
    <button id="btn2">stop</button>

</body>
<script>
    const randomnum = Math.random()
    console.log(randomnum)
    const back = document.querySelector('body')
    console.log(back);
    const start = document.querySelector('#btn1')
    const stop = document.querySelector('#btn2')
    let col
    start.addEventListener('click',(n)=>{
        const date = new Date()
        if(!col)
        col = setInterval(() => {
        back.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        console.log(date.getSeconds)
    },1000);
    })
    stop.addEventListener('click',(e)=>{
clearInterval(col)
col = null
    })
   
</script>
</html>
```
# project 6 (keypressed information)
## [http://127.0.0.1:5500/2_async_Project/keypressinfo.html]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table, th, td {
          border:1px solid black;
        }
        </style>
</head>
<body>
    <div class="main">

    </div>
    <!-- <table> -->
        <!-- <tr>
            <th>
                KEY-NAME
            </th>
            <th>KEY-CODE</th>
        </tr>
        <tr>
            <td id="key">
 
        </td>
        <td id="code">

        </td>
    </tr>
    </table> -->
</body>
<script>
    const body = document.querySelector('body')
    const div = document.querySelector('.main')
    
    // const code = document.querySelector('#code')
    // const key = document.querySelector('#key')
    body.addEventListener('keydown',(n)=>{
       div.innerHTML =  `<table>
        <tr>
            <th>
                KEY-NAME
            </th>
            <th>KEY-CODE</th>
        </tr>
        <tr>
            <td id="key">
 ${n.key}
        </td>
        <td id="code">
${n.keyCode}
        </td>
    </tr>
    </table>`
    document.body.appendChild(table)
        // console.log(n.keyCode)
        // console.log(n.key)
        // key.innerHTML = n.key
        // code.innerHTML  = n.keyCode

    })
</script>
</html>
```
# PROJECT 7 rectangle color change


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="center">

    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="rectangle.js"></script>
</html>
```
```css
/* CSS -> */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy';
}
html , body {
    height: 100%;
    width: 100%;
}
#center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    border: 1px solid rgb(0, 0, 0);
    width: 300px;
    height: 200px;
}
/* //sbse phle mouse rectangle pe aaya ye pata karo */
```
```javascript
// JAVASCRIPT

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
```


