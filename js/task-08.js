const loginForm = document.querySelector(".login-form");


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All fields must be filled in.");
    return;
}

const formData = {
    email: emailInput.value,
    password: passwordInput.value,
};
console.log("Form data:", formData);
loginForm.reset();
});