export const hideMobileNav = () => {
  const projectsLink = document.querySelector(
    ".mobileprojects"
  ) as HTMLAnchorElement;
  const mobileNav = document.querySelector(".mobileNav") as HTMLElement;
  const hamButton = document.querySelector(".hamButton") as HTMLButtonElement;

  projectsLink.addEventListener("click", () => {
    mobileNav.classList.remove("is-active");
    hamButton.classList.remove("is-active");
  });
};
