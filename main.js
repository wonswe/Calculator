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
  return a / b;
}

// Operate() Function

let operate = function(operator, a, b) {
  if (operator == '+') return add(a, b);
  else if (operator == '-') return subtract(a, b);
  else if (operator == '*') return multiply(a, b);
  else if (operator == '/') return divide(a, b);
}

console.log(operate('+', 5, 5));

const displayArea = document.querySelector('.display');

function display(number) {
  if (displayArea.textContent == '0') {
    displayArea.textContent = '';
    displayArea.textContent += number;
  } else (displayArea.textContent += number);
}

// Number Buttons //
const number_buttons = document.querySelectorAll('.number');

number_buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.value);
    display(e.target.value);
  })
});