document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.login-drawer__actions-switch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      showForm(target);
    });
  });

  function showForm(formName) {
    document.querySelectorAll('.login-drawer__content').forEach((form) => {
      form.classList.remove('is-active');
    });
    document
      .querySelectorAll(`.login-drawer__${formName}`)
      .forEach((form) => form.classList.add('is-active'));
  }
});
