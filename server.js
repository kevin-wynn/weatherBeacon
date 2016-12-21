// wunderground api and wrapper
var wunderground = require('wundergroundnode');
var myKey = '5587929fccc97e43';
var wunderground = new wunderground(myKey);

// python scripts
var PythonShell = require('python-shell');

var query = {
  city: 'Austin',
  state: 'TX'
};

function getWeatherConditions(callback){
  wunderground.conditions().request('78758', function(err, conditions) {
      if(!err) {
        var temp = conditions.current_observation.temp_f,
            condition = conditions.current_observation.weather;

        console.log('Temp: ', temp);
        console.log('Conditions: ', condition);

        // figure out what color to change leds to based on temp outside and conditions
        // anything lower than 30 degrees f
        if (temp <= 30) {
          PythonShell.run('./pi/scripts/lights/cold.py', function(err) {
            if(err) throw(err)
            console.log('changing led lights');
          });
        }

        // anything between 50 and 30 degrees f
        if (temp > 30 && temp <= 50) {
          PythonShell.run('./pi/scripts/lights/cool.py', function(err) {
            if(err) throw(err)
            console.log('changing led lights');
          });
        }

        // anything from 70 to 50 degrees f
        if (temp > 50 && temp <= 70) {
          PythonShell.run('./pi/scripts/lights/warm.py', function(err) {
            if(err) throw(err)
            console.log('changing led lights');
          });
        }

        // anything above 70 degrees
        if (temp > 70) {
          PythonShell.run('./pi/scripts/lights/hot.py', function(err) {
            if(err) throw(err)
            console.log('changing led lights');
          });
        }

        condition.toLowerCase();

        // a few overriding weather patterns take priority like rain, snow, etc since those don't last forever
        // if its raining
        switch(condition) {
          case 'drizzle':
          case 'rain':
          case 'mist':
          case 'fog':
          case 'fog patches':
          case 'rain mist':
          case 'rain showers':
          case 'thunderstorms':
          case 'thunderstorms and rain':
          case 'freezing drizzle':
          case 'freezing rain':
          case 'freezing fog':
          case 'patches of fog':
          case 'partial fog':
          case 'shallow fog':
          case 'overcast':
          case 'mostly cloud':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
        }

        // if its snowing (fat chance in austin)

      } else {
        console.log('There was an error getting the weather');
      }
  });

  callback();
}

function refreshConditions(){
  setTimeout(function(){
    getWeatherConditions(refreshConditions);
  }, 1.8e+6)
}

// 30 sec = 30000
// 1 minute = 60000
// 5 minutes = 300000
// 10 minutes = 600000
// 30 minutes = 1.8e+6

getWeatherConditions(refreshConditions);
