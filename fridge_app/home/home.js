var selectedCompartment;
var humidity;
var temperature;
var previousCompartment;

window.onload = function() {
  humidity = document.getElementById("humidityNumber");
  temperature = document.getElementById("temperatureNumber");
};

function selectCompartment(compartment) {
  previousCompartment = selectedCompartment;
  if (previousCompartment != undefined && previousCompartment != compartment) {
    previousCompartment.className = "compartment hydrated";
  }
  compartment.className = "compartment hydrated selected";
  selectedCompartment = compartment;
  var nums = compartment.innerHTML.toString().match(/\d+/g);
  temperature.innerHTML = nums[1] + "°F";
  humidity.innerHTML = nums[2] + "%";
}

function incrHumidity() {
  var matchText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var hum = matchText[0].match(/\d+/);
  var humNum = parseInt(hum[0]);
  humNum++;
  var newString = "Humidity: " + humNum + "%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchText[0],
    newString
  );
  humidity.innerHTML = humNum.toString() + "%";
}

function decrHumidity() {
  var matchText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var hum = matchText[0].match(/\d+/);
  var humNum = parseInt(hum[0]);
  humNum--;
  var newString = "Humidity: " + humNum + "%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchText[0],
    newString
  );
  humidity.innerHTML = humNum.toString() + "°%";
}

function incrTemp() {
  var matchText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var temp = matchText[0].match(/\d+/);
  var tempNum = parseInt(temp[0]);
  tempNum++;
  var newString = "Temperature: " + tempNum + "°F";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchText[0],
    newString
  );
  temperature.innerHTML = tempNum.toString() + "°F";
}

function decrTemp() {
  var matchText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var temp = matchText[0].match(/\d+/);
  var tempNum = parseInt(temp[0]);
  tempNum--;
  var newString = "Temperature: " + tempNum + "°F";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchText[0],
    newString
  );
  temperature.innerHTML = tempNum.toString() + "°F";
}

function vegetablePreset() {
  var matchTempText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var matchHumText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var newTempString = "Temperature: 40°F";
  var newHumString = "Humidity: 26%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchTempText[0],
    newTempString
  );
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchHumText[0],
    newHumString
  );
  temperature.innerHTML = "40°F";
  humidity.innerHTML = "26%";
}
function drinkPreset() {
  var matchTempText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var matchHumText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var newTempString = "Temperature: 32°F";
  var newHumString = "Humidity: 30%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchTempText[0],
    newTempString
  );
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchHumText[0],
    newHumString
  );
  temperature.innerHTML = "32°F";
  humidity.innerHTML = "30%";
}
function meatPreset() {
  var matchTempText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var matchHumText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var newTempString = "Temperature: 0°F";
  var newHumString = "Humidity: 10%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchTempText[0],
    newTempString
  );
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchHumText[0],
    newHumString
  );
  temperature.innerHTML = "0°F";
  humidity.innerHTML = "10%";
}
function fruitPreset() {
  var matchTempText = selectedCompartment.innerHTML
    .toString()
    .match(/Temperature: \d+°F/);
  var matchHumText = selectedCompartment.innerHTML
    .toString()
    .match(/Humidity: \d+%/);
  var newTempString = "Temperature: 43°F";
  var newHumString = "Humidity: 30%";
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchTempText[0],
    newTempString
  );
  selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(
    matchHumText[0],
    newHumString
  );
  temperature.innerHTML = "43°F";
  humidity.innerHTML = "30%";
}
