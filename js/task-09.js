function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');
const bgdColorRef = document.querySelector('span.color');

btnChangeColorRef.addEventListener("click", onClickChange);

function onClickChange(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  bgdColorRef.textContent = getRandomHexColor();
}

