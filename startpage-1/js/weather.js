var token = config.MY_API_TOKEN;
var lat = config.LAT;
var long = config.LONG;
if(token=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon(latlong) {
	fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +'&appid=' + token)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
	document.body.className = 'sunny';
  }
	else if( description.indexOf('snow') > 0 ) {
	document.body.className = 'snowy';
  } else {
	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 5417598 );
}