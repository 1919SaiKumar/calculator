let display = document.getElementById("display");
let shouldClearDisplay = false;

function appendToDisplay(value) {
    if (shouldClearDisplay) {
        display.value = "";
        shouldClearDisplay = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    shouldClearDisplay = false;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let expression = display.value;
    
    if (expression.trim() === "") return;
    
    if (/^[0-9+\-*/.]+$/.test(expression)) {
        display.value = eval(expression);
        shouldClearDisplay = true;
    } else {
        display.value = "";
    }
}
