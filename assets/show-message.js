function showMessage(actionPlace) {
  const message = document.querySelector('.success-message');
  if (!message) return;
  const messageText = message.dataset[`${actionPlace}Message`];
  message.textContent = messageText;
  message.style.visibility = 'visible';

  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 3000);
}
window.showMessage = showMessage;
