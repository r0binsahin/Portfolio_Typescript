import { modalToggle } from "./contactModal";

//mobile navbar toggler
export const displayMobileNav = () => {
  const hamButton: HTMLButtonElement = document.querySelector(
    ".hamButton"
  ) as HTMLButtonElement;
  const mobileNav: HTMLElement = document.querySelector(
    ".mobileNav"
  ) as HTMLElement;

  const modalContainer: HTMLDivElement = document.querySelector(
    ".modal_container"
  ) as HTMLDivElement;

  const AboutModalContainer: HTMLDivElement = document.querySelector(
    ".aboutModal"
  ) as HTMLDivElement;

  hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
    modalContainer.classList.remove("show");
    AboutModalContainer.classList.remove("show");
  });
};
