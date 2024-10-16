`use strict`;

document.addEventListener("DOMContentLoaded", function () {
  const buyButtonHero = document.querySelector(`.konditer-primaryButton`);
  const modalOrder = document.querySelector(`.modal-container`);
  const modalBtnClose = document.querySelector(".modalCloseButton");
  const formModal = document.querySelector(`.modal-form`);
  const modalContainerGreen = document.querySelector(`.modalContainerSuccess`);
  const modalBtnCloseGreen = document.querySelector(
    ".modalContainerSuccess .modalCloseButton"
  );

  buyButtonHero.addEventListener("click", (event) => {
    modalOrder.classList.add(`is-open`);
  });

  if (modalBtnClose) {
    modalBtnClose.addEventListener(`click`, (event) => {
      modalOrder.classList.remove(`is-open`);
    });
  }

  formModal.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userName = document.getElementById("user-name").value.trim();
    const userPhone = document.getElementById("user-phone").value.trim();
    const userEmail = document.getElementById("user-email").value.trim();
    const userComment = document.getElementById("user-comment").value.trim();

    if (!userName || !userPhone || !userEmail || !userComment) {
      alert("Заповніть всі поля, будь ласка.");
    } else {
      formModal.reset();
      modalOrder.classList.remove(`is-open`);
      modalContainerGreen.classList.add(`isOpen`);
    }
  });

  modalBtnCloseGreen.addEventListener(`click`, () => {
    modalContainerGreen.classList.remove(`isOpen`);
  });

  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieNotice").style.display = "block";
  }
  document
    .getElementById("acceptCookies")
    .addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", true);
      document.getElementById("cookieNotice").style.display = "none";
    });
});
