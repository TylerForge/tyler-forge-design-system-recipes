const openDialogButton = document.getElementById('open-dialog-button');
openDialogButton.addEventListener('click', () => {
  openDialog();
});

const openDialog = () => {
  const dialog = document.createElement('forge-dialog');
  const dialogTemplate = document.getElementById('dialog-content');
  dialog.appendChild(dialogTemplate.content.cloneNode(true));
  dialog.open = true; // This will append the dialog to the body automatically and start the open animation
  initDialogButtons();
};

const closeDialog = () => {
  const dialog = document.querySelector('forge-dialog');
  dialog.open = false;
};

let initDialogButtons = () => {
  const closeDialogButton = document.getElementById('close-dialog-button');
  const cancelDialogButton = document.getElementById('cancel-dialog-button');
  closeDialogButton.addEventListener('click', () => {
    closeDialog();
  });
  cancelDialogButton.addEventListener('click', () => {
    closeDialog();
  });
};
