const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('input[name="email"]');
const passInputEl = document.querySelector('input[name="password"]');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault(); 
    const emailError = checkEmail();
    const passError = checkPassword();

    if (emailError || passError) {
        alert (emailError || passError);
        return;
    }

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value
    
    const userData = {
        email,
        password,
    };
    event.currentTarget.reset();
    console.log(userData);
    return userData;
};

function checkEmail() {
    if (emailInputEl.value === '') {
        return "Введите Email";
    }
};

function checkPassword() {
    if (passInputEl.value === '') {
        return "Введите пароль";
    }
};