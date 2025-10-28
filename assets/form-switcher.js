document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.login-drawer__actions-switch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      showForm(target);
    });
  });

  function showForm(formName) {
    document.querySelectorAll('.login-drawer').forEach((form) => {
      form.classList.remove('is-active');
    });
    document.querySelector(`.login-drawer__${formName}`).classList.add('is-active');
  }
});
