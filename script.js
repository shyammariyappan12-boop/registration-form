const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");

function validateForm() {
    let isValid = true;

    // 1. Name Check
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // 2. Email Check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // 3. Password Check
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Enable/Disable Button
    submitBtn.disabled = !isValid;
}

// Event Listeners for Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);