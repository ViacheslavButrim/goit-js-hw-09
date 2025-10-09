const STORAGE_KEY = 'feedback-form-state';

// Отримуємо посилання на форму
const form = document.querySelector('.feedback-form');

// 1️⃣ Початковий об’єкт
let formData = {
  email: '',
  message: '',
};

// 2️⃣ Відновлення даних при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// 3️⃣ Відстеження подій input на формі (делегування)
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (!name) return; // ігноруємо елементи без name

  // Оновлюємо тільки потрібне поле
  formData[name] = value.trim();

  // Зберігаємо в localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4️⃣ Обробка події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // Оновлюємо об’єкт із поточними значеннями
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  // Перевірка заповнення полів
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виводимо актуальний об’єкт у консоль
  console.log(formData);

  // Очищаємо localStorage, форму і об’єкт
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
