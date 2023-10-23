function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");

changeButton.addEventListener("click", () => {
  const backgroundColor = document.querySelector(".color");
  backgroundColor.style.backgroundColor = getRandomHexColor();
});
