const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = "";

// Handle Button Clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.getAttribute('data-value');
        updateDisplay();
    });
});

// Handle Clear Button
clear.addEventListener('click', () => {
    currentInput = "";
    updateDisplay();
});

// Handle Equals Button
equals.addEventListener('click', calculate);

// Update the Display
function updateDisplay() {
    display.value = currentInput;
}

// Calculate Result
function calculate() {
    try {
        if (currentInput.trim() === '') {
            display.value = "Error";
            return;
        }
        let result = eval(currentInput);
        if (isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}

// Handle Keyboard Input
document.addEventListener('keydown', (event) => {
    if ((event.key >= 0 && event.key <= 9) || ['+', '-', '*', '/', '.'].includes(event.key)) {
        currentInput += event.key;
        updateDisplay();
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    } else if (event.key === 'Escape') {
        currentInput = "";
        updateDisplay();
    }
});
