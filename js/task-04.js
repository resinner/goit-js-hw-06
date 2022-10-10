const buttonDec = document.querySelectorAll("button")[0];

const buttoIncr = document.querySelectorAll("button")[1];

let counterValue = 0;

buttonDec.addEventListener('click', (event) => {
  counterValue = counterValue - 1;
    const valueEl = document.querySelector('span');
  valueEl.textContent = counterValue;
});

buttoIncr.addEventListener('click', (event) => {
  counterValue = counterValue + 1;
  const valueEl = document.querySelector('span');
  valueEl.textContent = counterValue;
});
