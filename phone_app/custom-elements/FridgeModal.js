class FridgeModal extends HTMLElement {
    async connectedCallback() {
        this.innerHTML =  `
        <ion-header id="err">
    
          <ion-toolbar>
            <ion-buttons slot="start" id="cancel">
                Cancel
            </ion-buttons>
    
            <ion-title>Temperature Control</ion-title>
    
            <ion-buttons slot="end" id="done">
                Done
            </ion-buttons>
    
          </ion-toolbar>
        </ion-header>
        <ion-content>
        
          <div id="fridgeContainer">
          <img src="../fridge.jpg" alt="fridge">
                                <div id="controls">
                                    <div id="HumidityControl">
                                        <h3>Humidity</h3>
                                        <ion-icon size="large" class="arrow" name="ios-arrow-dropup-circle" id="humidityUp"></ion-icon>
                                        <p id="humidityNumber">`+ this.humid +`</p>
                                        <ion-icon size="large" class="arrow" name="ios-arrow-dropdown-circle" onclick="decrHumidity(this)"></ion-icon>
                                    </div>
                                    <div id="TemperatureControl">
                                        <h3>Temperature</h3>
                                        <ion-icon size="large" class="arrow" name="ios-arrow-dropup-circle" onclick="incrTemp(this)"></ion-icon>
                                        <p id="temperatureNumber">`+ this.temp +`</p>
                                        <ion-icon size="large" class="arrow" name="ios-arrow-dropdown-circle" onclick="decrTemp(this)"></ion-icon>
                                    </div>
                                    </div>
    
                                    <div id="presets">
                                    <ion-button shape="round">Vegetable</ion-button>
                                    <ion-button shape="round">Drink</ion-button>
                                    <ion-button shape="round">Meat</ion-button>
                                    <ion-button shape="round">Fruit</ion-button>
                                    </div>
    
            </div>
        
        </ion-content>
        `;

        const button = document.querySelector('#cancel');
        button.addEventListener('click', () => {
          this.currentCompartment.innerHTML = "Tempature: "+ this.oldTemp +"°F <br><br>Humidity: "+ this.oldHumid +"°F";
    
          this.modalController.dismiss();
        });
    
        document.querySelector('#done').addEventListener('click', () => {
          this.modalController.dismiss();
        })

        document.querySelector('#humidityUp').addEventListener('click', incrHumidity)

        function incrHumidity(){  
            this.humid++
            document.querySelector("#humidityNumber").innerHTML = this.humid.toString() + "°F"
            console.log(this.currentCompartment)
            this.currentCompartment.innerHTML = "Tempature: "+ this.temp +"°F <br><br>Humidity: "+ this.humid +"°F";
        }
        
        function decrHumidity(){
          this.humid--
          document.getElementById("humidityNumber").innerHTML = this.humid.toString() + "°F"
          this.currentCompartment.innerHTML = "Tempature: "+ this.temp +"°F <br><br>Humidity: "+ this.humid +"°F";
        }
        
        function incrTemp(){
          this.temp++
          document.getElementById("temperatureNumber").innerHTML = this.temp.toString() + "°F"
          this.currentCompartment.innerHTML = "Tempature: "+ this.temp +"°F <br><br>Humidity: "+ this.humid +"°F";
        }
        
        function decrTemp(){
          this.temp--
          document.getElementById("temperatureNumber").innerHTML = this.temp.toString() + "°F"
          this.currentCompartment.innerHTML = "Tempature: "+ this.temp +"°F <br><br>Humidity: "+ this.humid +"°F";
        }

    }
}




