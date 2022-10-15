const inputRef = document.querySelector("#validation-input");
const validLengthRef = document.querySelector('[data-length="6"]');

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputRef.classList.add("invalid");
  inputRef.classList.add("valid");

  event.currentTarget.value.length === Number(validLengthRef.dataset.length)
    ? inputRef.classList.remove("invalid")
    : inputRef.classList.remove("valid");
}
