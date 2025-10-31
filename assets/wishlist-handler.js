export class WishlistHandler {
  constructor(wishlistBtn) {
    this.wishlistBtn = wishlistBtn;
    this.loginDrawer = document.getElementById('login-drawer');
    this.init();
  }

  init() {
    this.wishlistBtn?.addEventListener('click', (e) => this.handleWishlistClick(e));
  }

  handleWishlistClick(event) {
    const isLoggedIn = JSON.parse(document.body.dataset.customer);
    if (!isLoggedIn) {
      event.stopImmediatePropagation();
      event.preventDefault();
      const title = this.loginDrawer?.querySelector(
        '.login-drawer__login .login-drawer__form-title'
      );
      if (!title) return;
      title.textContent = title.dataset.wishlistText;
      this.loginDrawer?.showDialog();
      this.loginDrawer?.addEventListener(
        'dialog:close',
        () => (title.textContent = title.dataset.defaultText),
        { once: true }
      );
    } else {
      window.showMessage('wishlist');
    }
    return;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('.product-details');
  if (!parent) return;
  const observer = new MutationObserver(() => {
    const wishlistBtn = parent.querySelector(
      '.wishlisthero-product-page-button-container button'
    );
    if (wishlistBtn) {
      observer.disconnect();
      new WishlistHandler(wishlistBtn);
    }
  });
  observer.observe(parent, {
    childList: true,
    subtree: true,
  });
});
