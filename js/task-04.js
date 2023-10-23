const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const counterValue = document.getElementById("value");

let currentValue = 0;

const updateCounter = () => {
  counterValue.textContent = currentValue;
};

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  updateCounter();
});
