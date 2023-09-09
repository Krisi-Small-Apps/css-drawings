const popupContainer = document.querySelector("[data-popup]");
const closeButton = document.querySelector("[close-button]");

closeButton.addEventListener("click", closePopup);

function closePopup() {
  popupContainer.style.display = "none";
  setTimeout(() => openPopup(), 1000);
}

function openPopup() {
  popupContainer.style.display = "block";
}

setTimeout(() => openPopup(), 1000);
