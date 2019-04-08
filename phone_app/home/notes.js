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
  
  async function createNote(drawnNote) {
    const modal = await createNoteModal(drawnNote);
    await modal.present();
  }