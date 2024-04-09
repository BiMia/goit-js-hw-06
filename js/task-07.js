const fontSizeControl = document.querySelector("font-size-control");
const textSpan = document.querySelector("text");

fontSizeControl.addEventListener("input", () => {
    const fontSizeValue = fontSizeControl.ariaValueMax;
    textSpan.style.fontSize = '${fontSizeValue}px';
});