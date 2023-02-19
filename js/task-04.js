// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ >

//   Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.





const button = {
  btnDecrement: document.querySelector("[data-action='decrement']"),
  btnIncrement: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
};

let newValue = 0;

const increment = () => {
  newValue += 1;
  button.span.textContent = newValue;
};

const decrement = () => {
  newValue -= 1;
  button.span.textContent = newValue;
};
button.btnDecrement.addEventListener("click", decrement);
button.btnIncrement.addEventListener("click", increment);
