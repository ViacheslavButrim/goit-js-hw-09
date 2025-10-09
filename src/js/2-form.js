document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const STORAGE_KEY = 'feedback-form-state';

  let formData = { email: '', message: '' };

  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (!name) return;

    formData[name] = value; // без trim
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
  });
});
