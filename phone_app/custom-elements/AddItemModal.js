class AddItemModal extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button class="dismiss" id="back">
                    <ion-icon name="arrow-back"></ion-icon>
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
                <ion-datetime display-format="MMM DD, YYYY" value="2019-04-23T15:03:46.789" min="2019" max="2030"></ion-datetime>
            </ion-item>
    
            
        </ion-content>
        `;

        document.querySelector('#back').addEventListener('click', async () => {
            await document.querySelector('ion-modal-controller').dismiss();
        });

        document.querySelector('#done').addEventListener('click', async () => {
            var name = document.querySelector('#name').value
            var quantity = document.querySelector('#quantity').value
            document.getElementById(this.listName).innerHTML += '<ion-item-sliding><ion-item><ion-label><h3>' + name + '</h3></ion-label><p slot="end" id="test">' + quantity + '</p></ion-item><ion-item-options><ion-item-option>Favorite</ion-item-option></ion-item-options></ion-item-sliding>'
            await document.querySelector('ion-modal-controller').dismiss();

            
        });
    }
}