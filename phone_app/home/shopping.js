customElements.define('add-shopping-item', AddShoppingItemModal)

function addItem(item){
    var a= item.querySelector("ion-input").value
    console.log(a)

    var toAdd = `<ion-item-sliding>
                    <ion-item-options side="end">
                        <ion-item-option color="danger" onclick=deleteItem(this)>
                            Delete
                        </ion-item-option>
                    </ion-item-options>

                    <ion-item onclick=onShoppingItemClick(this) quantity="0">
                        <p class="shoppingItemName">`
                            + a + `
                        </p>
                    </ion-item> 
                    
                </ion-item-sliding>`
    item.parentElement.parentElement.querySelector('#shoppingList').innerHTML += toAdd

    item.querySelector("ion-input").value = ""
}

function deleteItem(item) {
    item.parentElement.parentElement.style.display = "none";
}

function onShoppingItemClick(item) {
    console.log(item)
    editShoppingItem(item)
}

async function editShoppingItem(item) {
    const modal = await editShoppingItemModal(item);
  
    
    modal.onDidDismiss().then(data => {
      if (data["data"]) {
        console.log("data is: ")
        console.log(data["data"])
            item.innerHTML = data["data"]["name"]
            item.attributes.quantity.value = data["data"]["quantity"]
      }
    })
  
    await modal.present()
}
  
async function editShoppingItemModal(item) {

    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    console.log("title is: ")
    // console.log(item.querySelector("#shoppingItemName").innerHTML)
    console.log(item.attributes.quantity.value)
    //content = item.querySelector('ion-item').innerHTML;

    var content = item.querySelector(".shoppingItemName").innerHTML
    // present the modal
    const modalElement = await modalController.create({
        component: 'add-shopping-item',
        componentProps: {
            'name': content,
            'quantity': item.attributes.quantity.value
          }
    });

    return modalElement;
}

function addClicked(item){
    addItem(item)
}
function enterPressed(e, item) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
        addItem(item)
    }
}