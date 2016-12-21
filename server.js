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

        // condition = 'Drizzle';
        // condition = 'Rain';
        // condition = 'Mist';
        // condition = 'Fog';
        // condition = 'Fog Patches';
        // condition = 'Rain Mist';
        // condition = 'Rain Showers';
        // condition = 'Thunderstorms';
        // condition = 'Thunderstorms and Rain';
        // condition = 'Freezing Drizzle';
        // condition = 'Freezing Rain';
        // condition = 'Freezing Fog';
        // condition = 'Patches of Fog';
        // condition = 'Partial Fog';
        // condition = 'Shallow Fog';
        // condition = 'Overcast';
        // condition = 'Mostly Cloudy';

        // a few overriding weather patterns take priority like rain, snow, etc since those don't last forever
        // if its raining
        switch(condition) {
          case 'drizzle':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'rain':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'mist':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'fog':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'fog patches':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'rain mist':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'rain showers':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'thunderstorms':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'thunderstorms and rain':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'freezing drizzle':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'freezing rain':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'freezing fog':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'patches of fog':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'partial fog':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'shallow fog':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
          case 'overcast':
            PythonShell.run('./pi/scripts/lights/rain.py', function(err) {
              if(err) throw(err)
              console.log('changing led lights');
            });
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
  }, 30000)
}

// 30 sec = 30000
// 1 minute = 60000
// 5 minutes = 300000
// 10 minutes = 600000
// 30 minutes = 1.8e+6

getWeatherConditions(refreshConditions);
