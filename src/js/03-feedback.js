import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

updateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const formSend = new FormData(event.currentTarget);
  formSend.forEach((value, name) => {
    formData[name] = value;
  });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = {};
}
form.addEventListener('submit', onFormSubmit);

function updateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}
