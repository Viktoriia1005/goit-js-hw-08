const form = document.querySelector('feedback-form');
const formData = {};
const KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

updateForm();

function onFormInput(event) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
}
