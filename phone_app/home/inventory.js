customElements.define('add-item', AddItemModal)


function addItem() {
  presentItemModal()
}

async function createItemModal(listName) {
  // initialize controller
  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  console.log(listName)
  // present the modal
  const modalElement = await modalController.create({
    component: 'add-item',
    componentProps: {
      'listName': listName + "List"
    }
  });

  return modalElement;
}

async function presentItemModal(listName) {
  const modal = await createItemModal(listName.id);
  await modal.present();
}

async function presentCategoryPrompt() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Enter Category Name',
    inputs: [
      {
        name: 'category',
        type: 'text',
        placeholder: 'Category'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          console.log(data.category);
          var name = data.category
          document.getElementById('lists').innerHTML += '<div id="lists"><ion-list id="' + name.toLowerCase() + 'List"><ion-list-header><ion-label>' + name + '</ion-label><ion-button onclick="presentItemModal(this)" fill="clear" id="' + name.toLowerCase() + '"><ion-icon name="add" size="large"></ion-icon></ion-button></ion-list-header></ion-list></div>'
        }
      }
    ]
  });

  return await alert.present();
}

