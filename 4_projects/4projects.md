# 4 PROJECTS ON DOM
# PROJECT 1 COLOR SWITCHER 
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
```html



```