const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
    const enteredValue = inputElement.value;
    const normalLenght = parseInt(inputElement.getAttribute("data-length"));

if (enteredValue.length === normalLenght) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
} else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
}
});