class AddShoppingItemModal extends HTMLElement {
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
    
                <ion-title>Edit Item</ion-title>
    
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
            
        </ion-content>
        `;

        if (!this.listName) {
            document.querySelector('#name').value = this.name
            document.querySelector('#quantity').value = this.quantity
        }

        document.querySelector('#back').addEventListener('click', async () => {
            await document.querySelector('ion-modal-controller').dismiss();
        });

        document.querySelector('#done').addEventListener('click', async () => {
            var name = document.querySelector('#name').value
            var quantity = document.querySelector('#quantity').value
            console.log("quantity is: ", quantity)
            if(name.trim() != "" && quantity.trim() != "") {
                if (this.listName) {
                    document.getElementById(this.listName).innerHTML += `<ion-item-sliding>
                    <ion-item onclick="onItemClick(this)" expiration="` + datetime + `">
                    <ion-icon name="" color="warning" slot="start" size="small"></ion-icon><p>`
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