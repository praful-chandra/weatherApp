

getWeather = ()=>{
   const location = document.getElementById("location");

   fetch(`/weather?city=${location.value}`).then(res=>{
       res.json().then(data=>{

        
          if(!data.error){
               
            document.getElementById("deg").innerHTML = data.temp;
            document.getElementById("deg2").innerHTML = data.temp;
            document.getElementById("humid").innerHTML = data.humidity;
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("type").innerHTML = data.description;

            document.getElementById("weatherData").style.display = "block";
            document.getElementById("error").style.display = "none";


          }else{
            document.getElementById("error").innerHTML = data.error

            document.getElementById("error").style.display = "block";
            document.getElementById("weatherData").style.display = "none";
          }
          



          
           
       })
   })
   
    
}
