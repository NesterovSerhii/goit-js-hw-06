function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body')
const changeColorBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onColorChange);

function onColorChange(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}