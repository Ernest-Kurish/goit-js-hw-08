// !import

import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Form state from local storage
const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

// Save the form state to storage
const saveStateToStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

form.addEventListener('input', saveStateToStorage);

form.addEventListener('submit', event => {
  event.preventDefault();

  // Log the form state to console
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(currentState);

  // Clear the form and local storage
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});
