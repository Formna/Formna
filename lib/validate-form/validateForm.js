const validateInput = require("../validate-input/ValidateInput");

const validateForm = (formName, idList, submitUrl, callback) => {
  const formElement = document.getElementById(formName);
  let inputFields = idList.map((element) => {
    return validateInput(
      element.id,
      element.errorId,
      element.initialValue,
      element.errorMessage,
      element.errorClassName,
      element.validator
    );
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let validToSubmit = true;

    inputFields = idList.map((element) => {
      return validateInput(
        element.id,
        element.errorId,
        element.initialValue,
        element.errorMessage,
        element.errorClassName,
        element.validator
      );
    });

    inputFields.forEach((inputField) => {
      if (!inputField.isValid && validToSubmit) {
        inputField.focus();
        validToSubmit = false;
      }
    });

    const submitData = async () => {
      let body = {};
      for (var i = 0; i < idList.length; i++) {
        body[idList[i].id] = inputFields[i].value;
      }
      const url = submitUrl;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Invalid response. Please check the url.");
      }

      const data = await response.json();

      inputFields.forEach((inputField) => {
        inputField.reset();
      });
      callback(data)
    };

    try {
      if (submitUrl && validToSubmit) {
        submitData();
      } 
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = validateForm;
