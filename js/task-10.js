function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const createButton = document.querySelector("[data-create]");
  const inputAmount = document.querySelector("input[type='number']");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  function createBoxes(amount) {
    boxesContainer.innerHTML = "";
    const initialSize = 30;
    const sizeIncrement = 10;

    for (let i = 0; i <amount; i++) {
      const box = document.createElement("div");
      box.style.width = "${initialSize + i * sizeIncrement}px";
      box.style.height = "${initialSize + i * sizeIncrement}px";
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.append(box);
    }
    return;
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }

  createButton.addEventListener('click', () => {
    const amount = parseInt(inputAmount.value, 10);
  createBoxes(amount);
});

destroyButton.addEventListener ("click", destroyBoxes);

