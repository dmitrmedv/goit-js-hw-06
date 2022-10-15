const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = inputRef.value;
  let sizeDiv = 30;
  while (0 < amount) {
    const backgroundColor = getRandomHexColor();
    boxesRef.insertAdjacentHTML(
      "beforeend",
      `<div class = "aaa" style = "background-color: ${backgroundColor}; width: ${sizeDiv}px; height: ${sizeDiv}px"></div>`
    );
    amount -= 1;
    sizeDiv += 10;
  }
}

function destroyBoxes() {
  const colorDivRef = document.querySelectorAll("#boxes div");
  colorDivRef.forEach((div) => {
    div.remove();
  });
  inputRef.value = "";
}
