import { validateInput } from 'formna'

const validator = validateInput("nameInput", 
                                "nameInputError", 
                                "", 
                                "Please enter a valid name", 
                                (inputValue) => inputValue.trim() != ""
                                )

console.log(validator.value)