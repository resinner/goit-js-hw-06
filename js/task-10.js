function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const divBoxRef = document.querySelector("div#boxes");

createBtnRef.addEventListener("click", getAmount);
destroyBtnRef.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px;)`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  divBoxRef.appendChild(fragment);
}

function destroyBoxes() {
  divBoxRef.innerHTML = "";
}
