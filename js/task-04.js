const refs = {
  deductBtn: document.querySelector('button[data-action="decrement"]'),
  addBtn: document.querySelector('button[data-action="increment"]'),
  valueRef: document.querySelector("#value"),
};

refs.deductBtn.addEventListener("click", onDeductBtnClick);

refs.addBtn.addEventListener("click", onAddBtnClick);

function onDeductBtnClick() {
  refs.valueRef.textContent--;
}

function onAddBtnClick() {
  refs.valueRef.textContent++;
}
