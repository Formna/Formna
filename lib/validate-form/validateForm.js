
const validateInput = require('../validate-input/ValidateInput')

const validateForm = (formName, classNames, submitUrl) => {
    const formElement = document.getElementById(formName);
    const inputFields = classNames.map((classId) => {
        return validateInput(classId.className, classId.errorName, classId.intialValue, classId.errorMessage, classId.validator);
    })

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        inputFields.forEach(inputField => {
            if (!inputField.isValid) {
                inputField.blur();
                inputField.focus();
                return
            }
        })
        let body = {};
    
        for (var i = 0; i<classNames.length; i++){
            body[classNames[i]] = inputFields[i].value;
        }
    
        const submitData = async() => {
            const url = submitUrl;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
    
            if (!response.ok){
                throw new Error("Invalid response. Please check the url.")
            }
    
            const data = await response.json();
        }
    
        try{
            submitData();
        }
        catch(err){
            console.log(err)
        }
        inputFields.forEach(inputField => {
            inputField.reset();
        })
    })

}

module.exports = validateForm;