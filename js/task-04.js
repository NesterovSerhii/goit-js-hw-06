const counterInitValue = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
 
decrementBtnEl.addEventListener('click', onDecrement);
incrementBtnEl.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue -= 1;
    counterInitValue.textContent = counterValue;
}

function onIncrement() {
    counterValue += 1;
    counterInitValue.textContent = counterValue; 
}