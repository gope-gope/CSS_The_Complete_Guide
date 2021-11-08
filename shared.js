var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var modalButtonNo = document.querySelector(".modal__action--negative");
var ctaButton = document.querySelector(".main-nav__item--cta");

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

function showModal() {
  modal.classList.add("open");
  backdrop.classList.add("open");
}

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", showModal);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalButtonNo) {
  modalButtonNo.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("animation iteration", event);
});
