var selectedCompartment;
var humidity
var temperature

window.onload = function() {
    humidity = document.getElementById('humidityNumber')
    temperature = document.getElementById('temperatureNumber')
}

function selectCompartment(compartment) {
    selectedCompartment = compartment
    var nums = compartment.innerHTML.toString().match(/\d+/g);
    temperature.innerHTML = nums[0] + "°F";
    humidity.innerHTML = nums[1] + "°F";
}

function incrHumidity(){
    var matchText = selectedCompartment.innerHTML.toString().match(/Humidity: \d+°F/)
    var hum = matchText[0].match(/\d+/)
    var humNum = parseInt(hum[0])
    humNum++
    var newString = "Humidity: " + humNum + "°F"
    selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(matchText[0], newString)
    humidity.innerHTML = humNum.toString() + "°F"
}

function decrHumidity(){
    var matchText = selectedCompartment.innerHTML.toString().match(/Humidity: \d+°F/)
    var hum = matchText[0].match(/\d+/)
    var humNum = parseInt(hum[0])
    humNum--
    var newString = "Humidity: " + humNum + "°F"
    selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(matchText[0], newString)
    humidity.innerHTML = humNum.toString() + "°F"
}

function incrTemp(){
    var matchText = selectedCompartment.innerHTML.toString().match(/Temperature: \d+°F/)
    var temp = matchText[0].match(/\d+/)
    var tempNum = parseInt(temp[0])
    tempNum++
    var newString = "Temperature: " + tempNum + "°F"
    selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(matchText[0], newString)
    temperature.innerHTML = tempNum.toString() + "°F"
}

function decrTemp(){
    var matchText = selectedCompartment.innerHTML.toString().match(/Temperature: \d+°F/)
    var temp = matchText[0].match(/\d+/)
    var tempNum = parseInt(temp[0])
    tempNum--
    var newString = "Temperature: " + tempNum + "°F"
    selectedCompartment.innerHTML = selectedCompartment.innerHTML.replace(matchText[0], newString)
    temperature.innerHTML = tempNum.toString() + "°F"
}

function vegetablePreset() {
}
function drinkPreset() {
}
function meatPreset() {
}
function fruitPreset() {
}
