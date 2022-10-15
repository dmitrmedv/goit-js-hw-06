const bgcNameRef = document.querySelector(".color");
const changeBtnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");

changeBtnRef.addEventListener("click", changeBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBtnClick() {
  const bgc = getRandomHexColor();
  bodyRef.style.backgroundColor = bgc;
  bgcNameRef.textContent = bgc;
}
