// Basic Math Operators 

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
} 

function divide(a, b) {
  if (b == 0) {
    return 'noot!';
  }
  return a / b;
}

// Operate() Function

let operate = function(operator, a, b) {
  if (operator == 'plus') return add(a, b);
  else if (operator == 'minus') return subtract(a, b);
  else if (operator == 'multiply') return multiply(a, b);
  else if (operator == 'divide') return divide(a, b);
}

// Initial Values //

let storage = {
  n1: undefined,
  n2: undefined,
  operator: undefined,
  answer: undefined,
}

// Initialize Values //
function clear() {
  storage.n1 = undefined;
  storage.n2 = undefined;
  storage.operator = undefined;
  storage.answer = undefined;
  displayArea.textContent = '0';
}

// Display Numbers //

const displayArea = document.querySelector('.display');

function display(number) {
  if (displayArea.textContent == '0' || storage.answer == displayArea.textContent) {
    displayArea.textContent = '';
    displayArea.textContent += number;
  } else (displayArea.textContent += number);
}

function clearDisplay() {
  displayArea.textContent = '';
}

// Number Buttons //
const number_buttons = document.querySelectorAll('.number');

number_buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // console.log(e.target.value);
    display(e.target.value);
  })
});

// Operator Buttons //
const operator_buttons = document.querySelectorAll('.operator');

operator_buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    storage.operator = e.target.value;
    storage.n1 = parseInt(displayArea.textContent);
    console.log(storage.n1);
    console.log(storage.operator);
    clearDisplay();
  })
})

// Equals Button //
const equals_button = document.querySelector('#equals');

equals_button.addEventListener('click', function() {
  storage.n2 = parseInt(displayArea.textContent);
  console.log(storage.n2);
  storage.answer = operate(storage.operator, storage.n1, storage.n2);
  clearDisplay();
  console.log(storage.answer);
  display(storage.answer);
})

// Clear Button //
const clear_button = document.querySelector('#clear');

clear_button.addEventListener('click', clear);