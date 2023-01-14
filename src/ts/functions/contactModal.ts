export const modalToggle = () => {
  const contactBtn = document.querySelector(
    ".mobilecontact"
  ) as HTMLButtonElement;

  const modalContainer: HTMLDivElement = document.querySelector(
    ".modal_container"
  ) as HTMLDivElement;

  const closeBtn: HTMLButtonElement = document.querySelector(
    ".closeBtn"
  ) as HTMLButtonElement;

  contactBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
};
