const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", () => {
  const numberOfSymbols = inputValidation.getAttribute("data-length");
  const inputValue = inputValidation.value;
  if (inputValue.length == numberOfSymbols) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
});
