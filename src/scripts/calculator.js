let currentResult = 0;

function getUserInput() {
    return parseInt(userInput.value);
}

function parseResult(operator, initialResult, input) {
    const calculationDesc = `${initialResult} ${operator} ${input}`;
    outputResult(currentResult, calculationDesc);
}

function add() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    parseResult('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    parseResult('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    parseResult('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    parseResult('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)