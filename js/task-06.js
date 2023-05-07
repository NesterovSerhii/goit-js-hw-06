const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', checkInputLength)

function checkInputLength() {
const currentInputLength = inputEl.value.length;
    const validInputLength = parseInt(inputEl.getAttribute('data-length'));

    if (currentInputLength === validInputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else if (currentInputLength === 0) {
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}