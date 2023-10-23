const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = e.target.value;
  }
});
