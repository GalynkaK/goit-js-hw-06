// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// < div id = "controls" >
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </ >

//   <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelectorAll("#controls");
const boxesCreate = document.querySelector("#boxes");
const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
boxesCreate.style.display = 'flex';
boxesCreate.style.alignItems = 'center';


buttonCreate.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumber.value.trim()) > Number(inputNumber.max) ||
    Number(inputNumber.value.trim()) < Number(inputNumber.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumber.value.trim());
  }
  inputNumber.value = '';
});

buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumber.value = '';
  boxesCreate.innerHTML = '';
}


function createBoxes(amount) {

  let basicSize = 30;
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    basicSize += 10 * i;
    const div = document.createElement('div');
    div.classList = 'item';
    div.style.width = `${basicSize}px`;
    div.style.height = `${basicSize}px`;
    div.style.marginRight = '30px';
    div.style.marginBottom = '30px';
    div.style.backgroundColor = getRandomHexColor();

    boxesArr.push(div);

    console.log('arr length', boxesArr.length);
  }

  return boxesCreate.append(...boxesArr);
}





