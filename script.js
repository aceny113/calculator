const numList = document.querySelectorAll(".number");
const display = document.querySelector(".display-input");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let firstInput = "";
let secondInput = "";
let op = "";
let result = "";

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
      firstInput = Number(display.textContent);
      console.log(firstInput);
      op = operatorButtons[i].textContent;
      console.log(op);
      display.textContent = "";
    });
  }
}

function equal() {
  equalButton.addEventListener("click", () => {
    secondInput = Number(display.textContent);

    result = operate(Number(firstInput), secondInput, op);

    display.textContent = result;

    firstInput = result;
  });
}

numInput();
operator();
equal();


//1. Insert first num
//2. pick operator
//3. Still display current number
//3. if operator exist display the current input.textContent to firstNum variable
//4. after clicking the 2nd number remove the current num and display the 2nd num;
//5. equal
