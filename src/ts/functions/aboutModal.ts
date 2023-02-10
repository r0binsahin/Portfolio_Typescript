export const aboutModalToggle = () => {
  const mobileAbout = document.querySelector(
    ".mobileabout"
  ) as HTMLAnchorElement;

  const desktopAbout = document.querySelector(".about") as HTMLAnchorElement;

  const modalContainer = document.querySelector(
    ".aboutModal"
  ) as HTMLDivElement;

  const closeBtn = document.querySelector(
    ".aboutModal__content--close"
  ) as HTMLButtonElement;

  mobileAbout.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  desktopAbout.addEventListener("click", () => {
    modalContainer.classList.toggle("show");
  });
};
