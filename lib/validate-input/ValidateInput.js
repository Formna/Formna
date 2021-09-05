const ValidateInput = (inputId, errorId, initialValue, errorMessage, validator) => {
    const inputField = document.getElementById(inputId);
    const errorField = document.getElementById(errorId);

    let inputValue = initialValue ? initialValue : "";
    let isInputTouched = false;
    let inputIsValid = validator(inputValue);
    let inputHasError = isInputTouched && !inputIsValid;

    
    inputField.addEventListener("input", (event) => {
        inputValue = event.target.value;
        inputIsValid = validator(inputValue);

        console.log(inputValue)
        inputHasError = isInputTouched && !inputIsValid;
        if (inputHasError){
            errorField.innerHTML = errorMessage;
        }
        else {
            errorField.innerHTML = null;
        }
    })

    inputField.addEventListener("blur", () => {
        isInputTouched = true;
        inputIsValid = validator(inputValue);
        inputHasError = isInputTouched && !inputIsValid;
        if (inputHasError){
            errorField.innerHTML = errorMessage;
        }
        else {
            errorField.innerHTML = null;
        }
    })
    
    const focusInputHandler = () => {
        inputField.focus();
    }

    return {
        value: inputValue,
        isValid: inputIsValid,
        focus: focusInputHandler
    }
}

module.exports = ValidateInput;