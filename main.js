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

// Clear Display //
function clearDisplay() {
  displayArea.textContent = '';
}

// Initialize Values //
function clear() {
  storage.n1 = undefined;
  storage.n2 = undefined;
  storage.operator = undefined;
  storage.answer = undefined;
  clearDisplay();
  displayArea.textContent = '0';
  point_button.addEventListener('click', addFloat);
}

// Display Numbers //

const displayArea = document.querySelector('.display');

function display(number) {
  if (displayArea.textContent == '0' || storage.answer == displayArea.textContent) {
    clearDisplay();
    displayArea.textContent += number;
  } else (displayArea.textContent += number);
}


// Number Buttons //
const number_buttons = document.querySelectorAll('.number');

number_buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    display(e.target.value);
  })
});

// Operator Buttons //
const operator_buttons = document.querySelectorAll('.operator');

operator_buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    storage.operator = e.target.value;
    storage.n1 = parseFloat(displayArea.textContent);
    console.log(storage.n1);
    console.log(storage.operator);
    point_button.addEventListener('click', addFloat);
    clearDisplay();
  })
})

// Equals Button //
const equals_button = document.querySelector('#equals');

equals_button.addEventListener('click', function() {
  if (storage.n1 == undefined) {
    return;
  } else if (!displayArea.textContent) {
    display(storage.n1);
  } else if (displayArea.textContent == storage.answer) {
    return;
  } else if (displayArea.textContent) {
    storage.n2 = parseFloat(displayArea.textContent);
    console.log(storage.n2);
    storage.answer = operate(storage.operator, storage.n1, storage.n2);
    clearDisplay();
    console.log(storage.answer);
    console.table(storage);
    display(storage.answer);
  } 
})

// Clear Button //
const clear_button = document.querySelector('#clear');

clear_button.addEventListener('click', clear);

// Floating Point Button //
const point_button = document.querySelector('#point');
point_button.addEventListener('click', addFloat);

// Add Floating Point Function //
function addFloat() {
  if (displayArea.textContent.includes(".")) {
    return;
  } else {
    displayArea.textContent += '.';
  }
}

// Percent() Function 
let percent = function(a) {
  storage.n1 = parseFloat(displayArea.textContent);
  storage.answer = storage.n1 / 100;
  clearDisplay(); 
  display(storage.answer);
  console.table(storage);
}

// Percent Button //
const percent_button = document.querySelector('#percent');
percent_button.addEventListener('click', percent);

// plusMinus() Function //
function plusMinus() {
  if(displayArea.textContent == '0') {
    return;
  } else if (displayArea.textContent.includes('-')) {
    displayArea.textContent = displayArea.textContent.slice(1);
  } else {
    displayArea.textContent = `-${displayArea.textContent}`;
  }
}

// PlusMinus Button //
const plusminus_button = document.querySelector('#plusminus');
plusminus_button.addEventListener('click', plusMinus);

// Backspace() Function //
function backspace() {
  if (displayArea.textContent == '0') {
    return
  } else if (displayArea.textContent == '') {
    displayArea.textContent = '0';
  } else if (displayArea.textContent == "NaN") {
    displayArea.textContent = '0';
  } else if (displayArea.textContent == "noot!") {
    displayArea.textContent = '0';
  } else {
    displayArea.textContent = displayArea.textContent.slice(0, -1);
  }
}

// Backspace Button //
const backspace_button = document.querySelector('#backspace');
backspace_button.addEventListener('click', backspace);
