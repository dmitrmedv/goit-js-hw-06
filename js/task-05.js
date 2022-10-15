const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputRefInput);

function onInputRefInput(event) {
  nameRef.textContent = event.currentTarget.value;
}
