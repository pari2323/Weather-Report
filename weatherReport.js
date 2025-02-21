function showWeatherDetails(event){
    debugger;
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apikey = "510cd4e7b6d0ac0077e5a2fb6d40156b";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&unit=metric`; 
    

    fetch(apiurl)
        .then(response => response.json())
        // parsing the body of the response
        //  from server to js object and passed to next then()

        // here data is a js variable can be named any thing 
        // here now holding parsed data fromthe server

        .then(data => {

            const weatherinfo = document.getElementById("weatherinfo");
            weatherinfo.innerHTML = `<h2> Weather in ${data.name} </h2>
                                    <p> Sunrise is : ${data.sys.sunrise} </p>
                                    <p> Sunset is : ${data.sys.sunset} </p>
                                    <p> Temperature: ${data.main.temp} &#8451 </p>
                                    <p> Weather: ${data.weather[0].description} </p>
                                    <p> Pressure:${data.main.pressure}
                                    <p>clouds:${data.clouds.all}`;

        })   
        // const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=510cd4e7b6d0ac0077e5a2fb6d40156b`;
        
        //here &#8451 is an HTML entity for degree celsium symbol
        // futher we can asssume the weather info is an array, and it starts with description hence we are accessing 
        // like this  // basically this can depend on api which is returning the weather data
}
document.getElementById("weatherForm").addEventListener('submit', showWeatherDetails) ;