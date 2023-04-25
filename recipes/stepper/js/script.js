const menuButton = document.querySelector('#menu-button');
const stepperDrawer = document.querySelector('#stepper-drawer');
const stepper = document.querySelector('#stepper');
const viewStepsButton = document.querySelector('#view-steps-button');
let desktopStepperContainer = document.querySelector('.stepper__container');
let mobileStepperContainer = document.querySelector('.mobile__stepper');
let desktopFooterToolbar = document.querySelector('#desktop-footer-toolbar');
let desktopScaffoldBody = document.querySelector('#desktop-scaffold-body');
let mobileScaffoldBody = document.querySelector('#mobile-scaffold-body');

viewStepsButton.addEventListener('click', () => (stepperDrawer.open = !stepperDrawer.open));

const stepperBody = `
<div class="stepper__body">
<p class="forge-typography--subtitle1-secondary span-full center-text">Let's start with a few key pieces of information</p>
<div class="stepper__column">
<h2 class="forge-typography--subtitle1 span-full">Applicant info</h2>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
</div>
<div class="stepper__column">
<h2 class="forge-typography--subtitle1 span-full">Applicant address</h2>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
<forge-text-field>
  <input type="text" id="input-text-01" />
  <label for="input-text-01" slot="label">Text field</label>
</forge-text-field>
</div>
</div>
`;

const initDesktopView = () => {
  desktopFooterToolbar.insertAdjacentHTML('beforebegin', stepperBody);
  setDesktopStyles();
 };

 const initMobileView = () => {
  mobileStepperContainer.insertAdjacentHTML('beforeend', stepperBody);
  setMobileStyles();
 };

const setDesktopStyles = () => {
  document.body.style.backgroundColor = 'var(--mdc-theme-background)';
  desktopScaffoldBody.style.display = 'block';
  desktopScaffoldBody.style.paddingTop = '24px';
  desktopScaffoldBody.style.margin = '0 auto';
  desktopScaffoldBody.style.maxWidth = '960px';
  desktopScaffoldBody.style.width = '100%';
  mobileScaffoldBody.style.display = 'none';
  desktopStepperContainer.style.display = 'block';
  mobileStepperContainer.style.display = 'none';
}

const setMobileStyles = () => {
  document.body.style.backgroundColor = 'var(--mdc-theme-surface)';
  desktopStepperContainer.style.display = 'none';
  mobileStepperContainer.style.display = 'block';
  mobileScaffoldBody.style.display = 'block';
  desktopScaffoldBody.style.paddingTop = '0';
  desktopScaffoldBody.style.margin = '0';
  desktopScaffoldBody.style.display = 'none';
}

const removeStepperBody = () => {
  document.querySelector('.stepper__body').remove();
}

// Set the desired media query based on your app
const mediaQuery = '(max-width: 768px)';
const mediaQueryList = window.matchMedia(mediaQuery);

// Check the media query on initial page load
if (mediaQueryList.matches) {
 // If the window is smaller than 768 we use the mobile UI
 initMobileView();
} else {
 // If the window is larger than 768 we use the desktop UI
 initDesktopView();
}

mediaQueryList.addEventListener('change', event => {
 if (event.matches) {
  removeStepperBody();
  initMobileView();
 } else {
  removeStepperBody();
  initDesktopView();
 }
});
