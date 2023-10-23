const slideControl = document.querySelector("#font-size-control");

slideControl.addEventListener("input", () => {
  const sizeAmount = slideControl.value;
  const spanText = document.querySelector("#text");
  spanText.style.fontSize = `${sizeAmount}px`;
});
