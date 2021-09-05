# Formna
### Quickly validate forms on your website
![](https://david-dm.org/iarchitsharma/Formna.svg)
<br>Formna is a fast, small, and easy to use JavaScript library. It makes the input and form validation super easy as validation logic can be changed according to users requirements.

## Install
```npm install formna```
  
## Usage
* To Validate a Single Input

```javascript
  import { validateInput } from "formna";

  const inputId = "name"; // id of the input field
  const errorId = "nameError"; // id of the error field relevant to the input
  const initialValue = ""; // initial value
  const errorMessage = "Enter a valid name"; // error message to be show
  const errorClassName = "error"; // class related to changes to be shown in the input element when an error occurs
  const validator = (inputVal) => inputVal.trim().length > 0; // validation logic

  const {
    value: nameInputValue,
    isValid: isNameValid,
    focus: focusName,
    hasError: nameHasError,
    reset: resetName
  } = validateInput(inputId, errorId, initialValue, errorMessage, errorClassName, validator)
  ```
* To Validate a Complete Form.
```javascript
  import { validateForm } from "formna";

  const className = "form";
  const fileldDetails = [
    {
      id: "username", //id of the input field
      errorId: "usernameError", //id of the error field of the respective input
      initialValue: "", // initial value of the input
      errorMessage: "Enter a valid email", // error message to be shown
      errorClassName: "error", // class related to changes need to be seen in the input element
      validator: (inputVal) => inputVal.includes("@"), // validation logic
    },
    {
      id: "password",
      errorId: "passwordError",
      initialValue: "",
      errorMessage: "Enter a valid password",
      errorClassName: "error",
      validator: (inputVal) => inputVal.toString().trim().length > 6,
    },
  ];
  const postEndPoint = "";
  validateForm(className, fileldDetails, postEndPoint);
  ```
  
## LICENSE
  MIT License

Copyright (c) 2021 Formna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  
