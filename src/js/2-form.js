const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

//  object with initial values
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

//   listening to event input on a form
form.addEventListener('input', event => {
  if (!name) return;
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

//  handler submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // update formData before audit
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData); // actual data

  //  clear storage and object
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});