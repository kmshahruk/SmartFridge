var currentCompartment;
var oldTemp;
var oldHumid;
var temp;
var humid;

async function createCompartmentModal(evnt) {
    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    // create component to open
    currentCompartment = evnt;
    var h = evnt.innerHTML.toString().match(/\d+/g);
    temp = parseInt(h[0]);
    humid = parseInt(h[1]);
    oldTemp =  temp;
    oldHumid = humid;
  
    const element = document.createElement('div');
    

    element.innerHTML = `
    <ion-header id="err">

      <ion-toolbar>
        <ion-buttons slot="start" id="cancel">
            Cancel
        </ion-buttons>

        <ion-title id= "title">Compartment ` +evnt.id + `</ion-title>

        <ion-buttons slot="end" id="done">
            Done
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    <ion-content>
    
      <div id="fridgeContainer">
      <img src="../fridge.jpg" alt="fridge">
                            <div id="controls">
                                <div id="TemperatureControl">
                                    <h3>Temperature</h3>
                                    <ion-icon size="large" class="arrow" name="arrow-dropup-circle" onclick="incrTemp(this)"></ion-icon>
                                    <p id="temperatureNumber">`+ temp +`°F</p>
                                    <ion-icon size="large" class="arrow" name="arrow-dropdown-circle" onclick="decrTemp(this)"></ion-icon>
                                </div>
                                <div id="HumidityControl">
                                    <h3>Humidity</h3>
                                    <ion-icon size="large" class="arrow" name="arrow-dropup-circle" onclick="incrHumidity(this)"></ion-icon>
                                    <p id="humidityNumber">`+ humid +`%</p>
                                    <ion-icon size="large" class="arrow" name="arrow-dropdown-circle" onclick="decrHumidity(this)"></ion-icon>
                                </div>
                                </div>

                                <div id="presets">
                                <ion-button shape="round" id="Vegetable">Vegetable</ion-button>
                                <ion-button shape="round" id="Drink">Drink</ion-button>
                                <ion-button shape="round" id="Meat">Meat</ion-button>
                                <ion-button shape="round" id="Fruit">Fruit</ion-button>
                                </div>

        </div>
    
    </ion-content>
    `

    element.querySelector('#Vegetable').addEventListener('click', () => {
      temp = "40";
      humid = "26";

      document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
      document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"

      currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";

    });
    element.querySelector('#Drink').addEventListener('click', () => {
      temp = "32";
      humid = "30";

      document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
      document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"

      currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";

    });
    element.querySelector('#Meat').addEventListener('click', () => {
      temp = "0";
      humid = "10";

      document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
      document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"

      currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";

    });
    element.querySelector('#Fruit').addEventListener('click', () => {
      temp = "43";
      humid = "30";

      document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
      document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"

      currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";

    });

    // listen for close event
    const button = element.querySelector('#cancel');
    button.addEventListener('click', () => {
      currentCompartment.innerHTML = "Tempature: <br>"+ oldTemp +"°F <br><br>Humidity: <br>"+ oldHumid +"%";

      modalController.dismiss();
    });

    element.querySelector('#done').addEventListener('click', () => {
      modalController.dismiss();
    })
    // present the modal
    const modalElement = await modalController.create({
      component: element,
      cssClass: 'custom-modal',
    });
    return modalElement;
  }
  async function presentCompartmentModal(evnt) {
    const modal = await createCompartmentModal(evnt);
    await modal.present();
  }

  function incrHumidity(){  
    humid++
    document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
    currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";
}

function decrHumidity(){
  humid--
  document.getElementById("humidityNumber").innerHTML = humid.toString() + "%"
  currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";
}

function incrTemp(){
  temp++
  document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"
  currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";
}

function decrTemp(){
  temp--
  document.getElementById("temperatureNumber").innerHTML = temp.toString() + "°F"
  currentCompartment.innerHTML = "Tempature: <br>"+ temp +"°F <br><br>Humidity: <br>"+ humid +"%";
}