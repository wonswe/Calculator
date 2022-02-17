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
  if (operator == 'plus') return add(a, b);
  else if (operator == 'minus') return subtract(a, b);
  else if (operator == 'multiply') return multiply(a, b);
  else if (operator == 'divide') return divide(a, b);
}

// Initial Values //

let input = {
  n1: undefined,
  n2: undefined,
  operator: undefined,
}

// Display Numbers //

const displayArea = document.querySelector('.display');

function display(number) {
  if (displayArea.textContent == '0') {
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
    input.operator = e.target.value;
    input.n1 = parseInt(displayArea.textContent);
    console.log(input.n1);
    console.log(input.operator);
    clearDisplay();
  })
})

// Equals Button //
const equals_button = document.querySelector('#equals');

equals_button.addEventListener('click', function() {
  input.n2 = parseInt(displayArea.textContent);
  console.log(input.n2);
  answer = operate(input.operator, input.n1, input.n2);
  clearDisplay();
  console.log(answer);
  display(answer);
})