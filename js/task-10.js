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
  const arrOfDivs = [];
  let sizeDiv = 30;
  while (0 < amount) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${sizeDiv}px`;
    div.style.height = `${sizeDiv}px`;
    arrOfDivs.push(div);
    amount -= 1;
    sizeDiv += 10;
  }
  boxesRef.append(...arrOfDivs);
  console.log();
}

function destroyBoxes() {
  const colorDivRef = document.querySelectorAll("#boxes div");
  colorDivRef.forEach((div) => {
    div.remove();
  });
  inputRef.value = "";
}
