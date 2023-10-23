function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function createBoxes(amount) {
  const baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseSize + i * 10}px`;
    box.style.height = `${baseSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

createButton.addEventListener("click", () => {
  const amount = inputAmount.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
