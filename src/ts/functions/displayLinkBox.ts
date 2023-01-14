export const displayLinkBox = () => {
  const contactLink = document.querySelector(".contact") as HTMLAnchorElement;
  const linkBox = document.querySelector(
    ".pageHead__linkBox"
  ) as HTMLDivElement;

  contactLink.addEventListener("click", () => {
    linkBox.classList.toggle("show");
  });
};
