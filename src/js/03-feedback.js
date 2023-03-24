// !import

import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Load the form state from local storage
const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

// Save the form state to local storage
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

// Check if all fields are filled in
if (!validateForm()) {
return;
}

// Log the current form state to console
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

// Validate the form fields
function validateForm() {
if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
alert('Please fill in all fields.');
return false;
}
return true;
}