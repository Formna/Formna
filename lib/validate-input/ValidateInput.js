const ValidateInput = (inputId, errorId, initialValue, errorMessage, validator) => {
    const inputField = document.getElementById(inputId);
    const errorField = document.getElementById(errorId);

    let inputValue = inputField.value;
    let isInputTouched = false;
    let inputIsValid = validator(inputValue);
    let inputHasError = isInputTouched && !inputIsValid;

    
    inputField.addEventListener("input", (event) => {
        inputValue = event.target.value;
        inputIsValid = validator(event.target.value);
        inputHasError = isInputTouched && !inputIsValid;
        if (inputHasError){
            errorField.innerHTML = errorMessage;
        }
        else {
            errorField.innerHTML = null;
        }
        return {
            value: inputValue,
            isValid: inputIsValid,
            focus: focusInputHandler,
            hasError: inputHasError,
            reset,
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
        return {
            value: inputValue,
            isValid: inputIsValid,
            focus: focusInputHandler,
            hasError: inputHasError,
            reset,
        }
    })
    
    const focusInputHandler = () => {
        inputField.focus();
        inputHasError = true;
        if (inputHasError){
            errorField.innerHTML = errorMessage;
        }
        else {
            errorField.innerHTML = null;
        }
    }

    const reset = () => {
        inputField.value = initialValue;
    }

    return {
        value: inputValue,
        isValid: inputIsValid,
        focus: focusInputHandler,
        hasError: inputHasError,
        reset,
    }
}

module.exports = ValidateInput;