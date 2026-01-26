const numList = document.querySelectorAll(".number");
const display = document.querySelector(".display-input");
const opList = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

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
  if (b === 0) return "Error";
  return a / b;
}

function operate(first, second, operator) {
  if (operator === "+") return add(first, second);
  if (operator === "-") return subtract(first, second);
  if (operator === "*") return multiply(first, second);
  if (operator === "/") return divide(first, second);
}

function initCalculator() {
  let firstInput = "";
  let secondInput = "";
  let op = "";
  let result = "";

  function setupNumberButtons() {
    for (let i = 0; i < numList.length; i++) {
      const numButton = numList[i];
      numButton.addEventListener("click", () => {
        display.textContent += numButton.textContent;

        setOperatorDisabled(false);
      });
    }
  }

  function setupOperatorButtons() {
    for (let i = 0; i < opList.length; i++) {
      const operatorButton = opList[i];
      operatorButton.addEventListener("click", () => {
        op = operatorButton.textContent;

        if (op) {
          firstInput = Number(display.textContent);
          display.textContent = "";
        }
      });
    }
  }

  function setOperatorDisabled(disabled) {
    for (let i = 0; i < opList.length; i++) {
      opList[i].disabled = disabled;
    }
  }

  function setupEqualButton() {
    equalButton.addEventListener("click", () => {
      secondInput = Number(display.textContent);
      result = operate(firstInput, secondInput, op);
      display.textContent = result;
      firstInput = result;
    });
  }
  setOperatorDisabled(true);
  setupNumberButtons();
  setupOperatorButtons();
  setupEqualButton();
}

initCalculator();
