const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// object with initial values
let formData = {
  email: '',
  message: '',
};

// data recovery from localStorage 
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// listening to event input on a form
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return; // skip if element without attribute name

  // save only store truncated values
  formData[name] = value.trim();

  // save actual object in localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// processing submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // update formData before departure
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  // check filling both fields
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // conclusion actual object in console
  console.log(formData);

  // clear localStorage, object and form
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});