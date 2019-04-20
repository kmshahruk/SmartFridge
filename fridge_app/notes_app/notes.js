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

async function editNoteModal(item, canvas) {
  var content;

  if (canvas) {
    content = item.querySelector('img').src
  } else {
    content = item.querySelector('textarea').innerHTML;
    console.log(content)
  }

  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // present the modal
  const modalElement = await modalController.create({
    component: 'add-note',
    componentProps: {
      'canvas': canvas,
      'content': content
    }
  });

  return modalElement;
}


async function createNote(drawnNote) {
  const modal = await createNoteModal(drawnNote);
  await modal.present();
}

async function editNote(item, canvas) {
  const modal = await editNoteModal(item, canvas);

  modal.onDidDismiss().then(data => {
    console.log(data)
    if (data["data"]) {
      if (canvas) {
        item.querySelector('img').src = data["data"]
      } else {
        item.querySelector('textarea').innerHTML = data["data"]
      }
    }
  })

  await modal.present();
}

function onImageNoteClick(item) {
  editNote(item, true)
  console.log("onImageNOteClick")
}

function onTextNoteClick(item) {
  editNote(item, false)
  console.log("onTextNoteClick")
}