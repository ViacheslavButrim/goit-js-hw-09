window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const STORAGE_KEY = 'feedback-form-state';

  if (!form) {
    console.error('Form .feedback-form not found in DOM');
    return;
  }

  // object with initial values
  let formData = {
    email: '',
    message: '',
  };

  // data recovery from localStorage 
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // merge so keys always exist
      formData = { ...formData, ...parsed };
    }
  } catch (err) {
    console.error('Error parsing saved data:', err);
  }

  // safely find inputs 
  const emailEl = form.querySelector('[name="email"]');
  const messageEl = form.querySelector('[name="message"]');

  // restore to fields only if elements found
  if (emailEl) emailEl.value = formData.email || '';
  if (messageEl) messageEl.value = formData.message || '';

  console.log('Restored formData:', formData);

  // save on input 
  form.addEventListener('input', onInput);
  form.addEventListener('change', onInput);

  function onInput(event) {
    const target = event.target;
    if (!target) return;
    const name = target.name;
    if (!name) return; 

    const value = target.value.trim();
    formData[name] = value;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
     
      // debug
      console.log('Saved to localStorage:', name, value, JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (err) {
      console.error('localStorage setItem error:', err);
    }
  }

  // submit handler
  form.addEventListener('submit', event => {
    event.preventDefault();

    // ensure up-to-date values 
    if (emailEl) formData.email = emailEl.value.trim();
    if (messageEl) formData.message = messageEl.value.trim();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log('Submit formData:', formData);

    // clear
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
  });
});
