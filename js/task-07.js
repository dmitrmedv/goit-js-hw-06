const frangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

frangeRef.addEventListener("input", onFrangeInput);

textRef.style.fontSize = `${frangeRef.value}px`;

function onFrangeInput() {
  textRef.style.fontSize = `${frangeRef.value}px`;
  console.log(`${frangeRef.value}px`);
}
