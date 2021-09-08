import { validateInput, validateForm } from "formna";

//Single input validation
const nameInput = validateInput(
  "name",
  "nameError",
  "",
  "Enter a valid name",
  "error",
  (inputValue) => inputValue.trim().length > 6
);

// Complete form validation
const className = "form";
const fileldDetails = [
  {
    id: "email", //id of the input field
    errorId: "emailError", //id of the error field of the respective input
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
const postEndPoint = "https://ohacks-demo-default-rtdb.firebaseio.com/demo.json"; // this is completely optional. you can see the same results without passing the third parameter.
const result = validateForm(className, fileldDetails, postEndPoint);
console.log(result)

document.getElementById(className).addEventListener("submit", () => {
  console.log(result)
})
