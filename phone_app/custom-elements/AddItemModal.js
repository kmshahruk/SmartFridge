class AddItemModal extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
        <ion-alert-controller></ion-alert-controller>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button class="dismiss" id="back">
                    <ion-icon name="ios-arrow-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
    
                <ion-title>Add Item</ion-title>
    
                <ion-buttons slot="end">
                    <ion-button class="dismiss" id="done">
                    Done
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
    
        <ion-content>
            <ion-item>
                <ion-label position="stacked">Name</ion-label>
                <ion-input id="name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked" type="number">Quantity</ion-label>
                <ion-input id="quantity"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked">Expiration Date</ion-label>
                <ion-datetime display-format="MMM DD, YYYY" value="2019-04-20T20:00:00-04:00" min="2019" max="2030"></ion-datetime>
            </ion-item>
    
            
        </ion-content>
        `;

        if (!this.listName) {
            document.querySelector('#name').value = this.name
            document.querySelector('#quantity').value = this.quantity
            document.querySelector("ion-datetime").value = this.expiration
        }

        document.querySelector('#back').addEventListener('click', async () => {
            console.log( document.querySelector("ion-datetime").value)
            await document.querySelector('ion-modal-controller').dismiss();
        });

        document.querySelector('#done').addEventListener('click', async () => {
            var name = document.querySelector('#name').value
            var quantity = document.querySelector('#quantity').value
            var datetime = document.querySelector('ion-datetime').value

            if(name.trim() != "" && quantity.trim() != "") {
                if (this.listName) {
                    document.getElementById(this.listName).innerHTML += `<ion-item-sliding>
                    <ion-item onclick="onItemClick(this)" expiration="` + datetime + `">
                    <ion-icon name="" color="warning" slot="start" size="small" class="alert-icon"></ion-icon>
                    <ion-icon name="close" color="danger" slot="start" size="small" class="delete-icon" onclick="deleteInventoryItem(this)"></ion-icon>
                    <p>`
                    + name + `</p><p slot="end" id="test">` + quantity + 
                    `</p></ion-item><ion-item-options>
                    <ion-item-option color="danger" onclick="deleteInventoryItem(this)">
                    Delete
                   </ion-item-option></ion-item-options></ion-item-sliding>`
                   await document.querySelector('ion-modal-controller').dismiss();
                } else {
                    var data = {
                        'name': document.querySelector('#name').value,
                        'quantity': document.querySelector('#quantity').value,
                        'expiration': document.querySelector("ion-datetime").value
                    }

                    await document.querySelector('ion-modal-controller').dismiss(data);
                }
                
            } else {
                presentAlert()
            }
            
        });

        async function presentAlert() {
            const alertController = document.querySelector('ion-alert-controller')
            await alertController.componentOnReady()

            const alert = await alertController.create({
                header: 'Error',
                message: 'Please fill out all fields',
                buttons: ['OK']
            })

            return await alert.present()
        }
    }
}