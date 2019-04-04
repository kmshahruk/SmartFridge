async function createModal() {
    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    // create component to open
    x = compartment.temp;
    y = compartment.humid;
    const element = document.createElement('div');
    if(compartment.temp == "75"){    compartment.temp = 30;
    } else {
        compartment.temp ="60";
    }

    element.innerHTML = `
    <ion-header class="custom-modal" id="err">
      <ion-toolbar class="custom-modal">
        <ion-title>Super Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Content of doom</h1>
      <div>Here's some more content</div>
      <ion-button class="Home" id= "homeButton">Dismiss Modal</ion-button>
    </ion-content>
    `+ compartment.temp;
    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', () => {
      modalController.dismiss();
    });
    // present the modal
    const modalElement = await modalController.create({
      component: element,
       componentProps: {
    'prop1': 20,
    'prop2': 30
  },
      cssClass: 'custom-modal',
    });
    return modalElement;
  }
  async function presentModal() {
    const modal = await createModal();
    await modal.present();
  }