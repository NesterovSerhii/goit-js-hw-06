const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('input[name="email"]');
const passInputEl = document.querySelector('input[name="password"]');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault(); 
    checkEmail();
    checkPassword();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value

    const userData = {
        email,
        password,
    };
    console.log(userData);
    event.currentTarget.reset();
    return userData;
};

function checkEmail() {
    if (emailInputEl.value === '') {
        return alert("Введите Email");
    }
};

function checkPassword() {
    if (passInputEl.value === '') {
        return alert("Введите пароль");
    }
};