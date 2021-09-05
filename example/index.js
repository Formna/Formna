import { validateInput } from 'formna'

const nameInput = validateInput("name", "nameError", "", "Enter a valid name", "error", (inputValue) => inputValue.trim().length > 6)