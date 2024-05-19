const btnEl = document.querySelector(".btn");
const diceContainerEl = document.querySelector(".dice-container");
const wrapperEl = document.querySelector(".wrapper");
const outputWrapperEl = document.querySelector(".outputWrapper");

function rotateDice() {
  diceContainerEl.classList.add("animate");
  setTimeout(() => {
    diceContainerEl.classList.remove("animate")
  }, 1000);
}

function getDiceEvent() {
  const outputContainerEl = document.createElement("div");
  outputContainerEl.classList.add("output");
  outputWrapperEl.appendChild(outputContainerEl);
  const rollNoEl = document.createElement("h4");
  rollNoEl.classList.add("rollNo");
  outputContainerEl.appendChild(rollNoEl);
  const diceOutputEl = document.createElement("div");
  diceOutputEl.classList.add("diceOutput");
  outputContainerEl.appendChild(diceOutputEl);
  const randomNum = Math.floor(Math.random() * 6 + 1);
  if (randomNum === 1) {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
  } else if (randomNum === 2) {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
  } else if (randomNum === 3) {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
  } else if (randomNum === 4) {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
  } else if (randomNum === 5) {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
  } else {
    rollNoEl.textContent = `Roll ${randomNum}:`;
    diceOutputEl.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
    diceContainerEl.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
  }
}

btnEl.addEventListener("click", () => {
  rotateDice();
  setTimeout(() => {
    getDiceEvent();
  }, 1000);
});
