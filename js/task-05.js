const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onNameInput);

function onNameInput(event) {
    if (event.currentTarget.value === "") {
        outputEl.textContent = "Anonymous"
    } else outputEl.textContent = event.currentTarget.value;
}