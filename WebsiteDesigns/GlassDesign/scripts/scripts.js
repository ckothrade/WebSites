function init(city) {

  const url = 'http://api.weatherstack.com/current?access_key=5eb97547036c6eaff80e6e7f9a7e67b9&query=' + city;

  fetch(url)
    .then(function(request){
      if(!request.ok){

        //log error
        console.log("Error " + request.status + ": Request failed!");

        //set table values to n/a
        document.getElementById('city').innerHTML= 'Error';
      }  

      //If it is okay, pass request on
      return request;
    })
    .then((resp) => resp.json())
    .then(function(data){
      // Call display function
       displayData(data); 
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });   



}

function refresh(){
  let refresh = document.getElementById("city").innerHTML;
  // console.log(refresh);
  init(refresh);
}

function displayData(data) {

  // Board data
  document.getElementById('city').innerHTML = data.location.name;
  document.getElementById('state').innerHTML = data.location.region;
  document.getElementById('temp').innerHTML = data.current.temperature;
  document.getElementById('precip').innerHTML = data.current.precip;
  document.getElementById('cardinal').innerHTML = data.current.wind_dir;
  document.getElementById('time').innerHTML = data.location.localtime.split(" ")[1];
  document.getElementById('hum').innerHTML = data.current.humidity;
  document.getElementById('ws').innerHTML = data.current.wind_speed;

  // Avatar photo
  document.getElementById('user').innerHTML = '<img src="' + data.current.weather_icons[0] + '" height="100%" width="100%" alt="avatar">';
}
