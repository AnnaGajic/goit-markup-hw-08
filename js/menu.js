(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();


// .mobile-menu {
//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;
// }
// Мобильное меню открывается когда на него вешается клас is-open. Нужно описать еще этот клас, например:

// .mobile-menu.is-open {
//   opacity: 1;
//   visibility: visible;
//   pointer-events: auto;
// }