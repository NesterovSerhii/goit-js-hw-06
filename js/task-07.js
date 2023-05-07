const inputEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

inputTextEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
    inputTextEl.style.fontSize = inputEl.value + 'px';
}