function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  mainDivEl: document.querySelector('#boxes'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  inputEl: document.querySelector('input'),
}

refs.createBtnEl.addEventListener('click', onCreateBtn);
refs.destroyBtnEl.addEventListener('click', () => {
  refs.mainDivEl.innerHTML = '';
});


function createBoxes(amount) {
  const boxes = [];
  let size = 30;

   for (let i = 0; i < amount; i += 1) {
     const newDiv = document.createElement('div');
     newDiv.style.width = `${size}px`;
     newDiv.style.height = `${size}px`;
     newDiv.style.backgroundColor = getRandomHexColor();
     size += 10;
     boxes.push(newDiv);
    }
    refs.mainDivEl.append(...boxes);
}
  
  function onCreateBtn() {
    const amount = refs.inputEl.value;
    if (amount > 100 || amount <= 0) {
      return alert ("Введите число от 1 до 100")
    }
     createBoxes(amount);
  }