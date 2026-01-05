const numList = document.querySelectorAll(".number");
const display = document.querySelector(".display-input");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let first = "";
let second = "";
let op = "";
const resetDisplay = false;

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

function operate(first, second, operator) {
  if (operator === "+") return add(first, second);
  if (operator === "-") return subtract(first, second);
  if (operator === "*") return multiply(first, second);
  if (operator === "/") return divide(first, second);
}

function numInput() {
  for (let i = 0; i < numList.length; i++) {
    numList[i].addEventListener("click", () => {
      display.textContent += numList[i].textContent;
    });
  }

}

function operator() {
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", () => {
      op = operatorButtons[i].textContent;
      display.textContent = op;
    });

  }


  
}

numInput();
operator();
operate();

    if (op) {
    resetDisplay = true;
    display.textContent = "";
    
  }
