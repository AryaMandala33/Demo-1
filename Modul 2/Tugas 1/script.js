
const result = document.getElementById('result');
let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    result.value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    result.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    result.value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    result.value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        result.value = displayValue;
    } catch (error) {
        result.value = 'Error';
        displayValue = '';
    }
}
