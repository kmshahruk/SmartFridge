customElements.define('add-note', AddNoteModal)
var editing = false

function deleteInventoryItem(item) {
  console.log(item)
  item.parentElement.parentElement.style.display = "none";
}

function addRemoveButtons(button) {
  if (editing) {
    button.innerText = "Edit"

    document.querySelectorAll(".delete-icon").forEach(item => {
      item.style.display = "none"
    })
  } else {
    button.innerText = "Done"

    document.querySelectorAll(".delete-icon").forEach(item => {
      item.style.display = "block"
    })
  }

  

  editing = !editing
}

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
  if (!editing) {
    editNote(item, true)
    console.log("onImageNOteClick")
  }
}

function onTextNoteClick(item) {
  if (!editing) {
    editNote(item, false)
    console.log("onTextNoteClick")
  }
}