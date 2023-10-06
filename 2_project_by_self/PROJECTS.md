# PROJECT 1 BMI CALCULATOR [http://127.0.0.1:5500/2_project_by_self/bmical.html]
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bmi calculator</title>
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
function calculater(){
    const weight = document.querySelector('#wei').value
  
    const height = document.querySelector('#hei').value
const bmi = 703*(weight/(height*height)) 
console.log(bmi)
const ans = document.querySelector('#textt')

if(bmi<=18.4)
ans.innerHTML = `bmi is ${bmi.toFixed(2)} UNDERWEIGHT`


else if(bmi>=18.5&&bmi<=24.9){
    ans.innerHTML = `bmi is ${bmi.toFixed(2)} NORMAL`
}
else if(bmi>=25&&bmi<=39.9){
    ans.innerHTML = `bmi is ${bmi.toFixed(2)} OVERWEIGHT`
}
else if(isNaN){
    ans.innerHTML = "ENTER VALID HEIGHT AND WEIGHT"
}
else{
    ans.innerHTML = `bmi is ${bmi.toFixed(2)} OBESE`

}

}
calculater()
</script>
</html>
```
# PROJECT 2 RANDOM COLOR GENERATOR [http://127.0.0.1:5500/2_project_by_self/colorchange.html]
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>color changer</title>
</head>
<body>
    <button onclick="change()" id="dev">click me</button>
</body>
<script>
    const back = document.querySelector('body')
    // function change(change){
    //     console.log("clicked")
    //     back.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    // }
    // change()
const btn = document.querySelector('#dev')
btn.addEventListener('click' , function(e){
    back.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
})
</script>
</html>
```