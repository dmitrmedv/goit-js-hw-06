const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputRefInput);

function onInputRefInput(event) {
  event.currentTarget.value !== ""
    ? (nameRef.textContent = event.currentTarget.value)
    : (nameRef.textContent = "Anonymous");
}
