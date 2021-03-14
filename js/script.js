const loginFeedback = document.querySelector(".button-feedback");
const loginPopup = document.querySelector(".modal");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".feedback-form");
const loginLogin = loginPopup.querySelector(".login-user");
const loginPassword = loginPopup.querySelector(".login-email-user");
const sliderButtons = document.querySelectorAll(".slider-list button");
const sliderSlides = document.querySelectorAll(".slider .slide");
const sliderButtonItems = document.querySelectorAll(".slider .slide-item")

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});


for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", onButtonClick);
  function onButtonClick(evt) {
    for (let j = 0; j < sliderSlides.length; j++) {
      if (i === j) {
        sliderSlides[j].classList.add("slide-active");
      } else {
        sliderSlides[j].classList.remove("slide-active");
      }
    }
    for (let j = 0; j < sliderButtonItems.length; j++) {
      if (i === j) {
        sliderButtonItems[j].classList.add("slide-item-active");
      } else {
        sliderButtonItems[j].classList.remove("slide-item-active");
      }
    }
  }
}

