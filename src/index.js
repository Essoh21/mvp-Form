import html from './index.html';
import style from './style.css';

const errorContainers = document.querySelectorAll('.message');
const allInputs = [...document.getElementsByTagName('input')];
const passWord = document.querySelector('#password');
const confirmation = document.querySelector('#confirmation');
const submit = document.querySelector('.submit');
const confirmationErrorContainer = document.querySelector('.confirmation-error');
const confirmationErrorMessage = 'your password confirmation doesn\'t match the password';
let isInvalid = false;

allInputs.forEach((inputElement, index) => {
    inputElement.addEventListener('input', () => {
        if (!inputElement.validity.willValidate) {
            errorContainers[index].innerHTML = `${inputElement
                .validationMessage}`;
            errorContainers[index].style.padding = '.2rem';
        }

        if (!inputElement.validity.willValidate) {
            errorContainers[index].style.padding = '0';
        }
    })
})

function displayFoundErrors(inputs) {
    inputs.forEach((inputField, index) => {
        if (!inputField.validity.willValidate) {
            errorContainers[index].innerHTML = `${inputField
                .validationMessage}`;
            errorContainers[index].style.padding = '.2rem';
        }

        if (!inputField.validity.willValidate) {
            errorContainers[index].style.padding = '0';
        }
    })
}

function checkAndDisplayConfirmationError() {
    if (!isEqual(passWord.value, confirmation.value)) {
        displayConfirmationErrorMessage(confirmationErrorMessage);
        event.preventDefault();

    }

    if (!areAllFieldsValide(allInputs)) {
        event.preventDefault();

    }

}
function displayConfirmationErrorMessage(
    errorMessage,
    messageContainer = confirmationErrorContainer
) {
    messageContainer.innerHTML = `${errorMessage}`
}

function isEqual(inputPassword, passwordConfirmation) {
    if (inputPassword == passwordConfirmation) {
        return true;
    }
    return false;
}

function areAllFieldsValide(inputsArray) {
    inputsArray.forEach((inputField) => {
        if (inputField.validity.willValidate) {
            return true;
        }
        return false;
    })
}

submit.addEventListener('click', () => {
    if ((!areAllFieldsValide(allInputs)) || (!isEqual(passWord.value, confirmation.value))) {
        displayFoundErrors(allInputs);
        checkAndDisplayConfirmationError();
    }

});