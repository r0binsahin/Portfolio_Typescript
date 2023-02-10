export const desktopContactModalToggle = () => {
  const desktopContact = document.querySelector(
    ".contact"
  ) as HTMLAnchorElement;

  const modalContainer = document.querySelector(
    ".desktopContactModal"
  ) as HTMLDivElement;

  const closeBtn = document.querySelector(
    ".desktopContactModal__content--close"
  ) as HTMLButtonElement;

  /*const modalHeader = document.querySelector(
    ".aboutModal__content--header"
  ) as HTMLHeadingElement;  */

  modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  desktopContact.addEventListener("click", () => {
    modalContainer.classList.toggle("show");
  });
};
