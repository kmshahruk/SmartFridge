customElements.define('add-note', AddNoteModal)

async function createNoteModal(drawnNote) {
  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // present the modal
  const modalElement = await modalController.create({
    component: 'add-note',
    componentProps: {
      'canvas': drawnNote
    }
  });

  return modalElement;
}

async function editNoteModal(item) {
  var text = item.querySelector('ion-card-content').textContent

  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // present the modal
  const modalElement = await modalController.create({
    component: 'add-note',
    componentProps: {
      'canvas' : false,
      'content': text
    }
  });

  return modalElement;
}


async function createNote(drawnNote) {
  const modal = await createNoteModal(drawnNote);
  await modal.present();
}

async function editNote(item) {
  const modal = await editNoteModal(item);

  modal.onDidDismiss().then(data => {
    console.log(data)
    if (data["data"]) {
      item.querySelector('ion-card-content').innerHTML = data["data"]
    }
  })
  
  await modal.present();
}

function onImageNoteClick() {
  console.log("onImageNOteClick")
}

function onTextNoteClick(item) {
  editNote(item)
  console.log("onTextNoteClick")
}