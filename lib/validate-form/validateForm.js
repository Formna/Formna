const validateInput = require("../validate-input/ValidateInput");

const validateForm = (formName, classNames, submitUrl) => {
  const formElement = document.getElementById(formName);
  let inputFields = classNames.map((classId) => {
    return validateInput(
      classId.className,
      classId.errorName,
      classId.initialValue,
      classId.errorMessage,
      classId.validator
    );
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let validToSubmit = true;

    inputFields = classNames.map((classId) => {
      return validateInput(
        classId.className,
        classId.errorName,
        classId.initialValue,
        classId.errorMessage,
        classId.validator
      );
    });

    inputFields.forEach((inputField) => {
      console.log(inputField);
      if (!inputField.isValid && validToSubmit) {
        inputField.focus();
        validToSubmit = false;
        console.log(inputField.value);
      }
    });

    const submitData = async () => {
      let body = {};
      console.log("Sending...");
      for (var i = 0; i < classNames.length; i++) {
        body[classNames[i]] = inputFields[i].value;
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
    };

    try {
      if (submitUrl && validToSubmit) {
        submitData();
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = validateForm;
