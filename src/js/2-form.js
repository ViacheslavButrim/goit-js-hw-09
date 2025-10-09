import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// 🟢 1. Завантажуємо збережені дані при старті
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (error) {
    console.error('Invalid JSON in localStorage:', error);
  }
}

// 🟢 2. Слухаємо input і зберігаємо дані в сховище (throttled)
form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

// 🟢 3. Сабміт форми
form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // 🟥 Перевірка заповнення
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  // 🟢 Логуємо актуальні дані
  console.log({ email, message });

  // 🟢 Очищаємо форму та сховище
  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  // 🟢 Скидаємо локальний об’єкт
  formData = { email: '', message: '' };
});
