const openDialogButton = document.getElementById("open-dialog-button");

openDialogButton.addEventListener("click", () => {
  openDialog();
});

let openDialog = () => {
  const dialog = document.createElement("forge-dialog");
  const dialogTemplate = document.getElementById("dialog-content");
  dialog.appendChild(dialogTemplate.content.cloneNode(true));
  dialog.open = true; // This will append the dialog to the body automatically and start the open animation
};

openDialog();
