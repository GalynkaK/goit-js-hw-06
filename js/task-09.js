// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.

// < div class="widget" >
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </ >

//   Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener('click', onClickChangeColor);

function onClickChangeColor(event) {
  let createColor = getRandomHexColor();
  document.body.style.backgroundColor = createColor;
  color.textContent = createColor;
};

button.addEventListener('click', onClickChangeColor);
