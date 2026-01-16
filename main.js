
// Calculator application with enhanced functionality and security

// Get the display element
const display = document.querySelector("p.screen-text");

/**
 * Evaluates the mathematical expression in the display
 * Uses a safer evaluation method instead of eval()
 */
function calcAll() {
    try {
        const expression = display.innerText.trim();

        // Check if the expression is empty
        if (!expression) {
            display.innerText = "0";
            return;
        }

        // Validate the expression to prevent injection attacks
        // Allow only numbers, operators (+, -, *, /, ., (, ), %)
        const validExpressionRegex = /^[0-9+\-*/.() ]+$/;
        if (!validExpressionRegex.test(expression)) {
            throw new Error("Invalid expression");
        }

        // Replace * and / with proper JavaScript operators for evaluation
        // Using Function constructor as a safer alternative to eval
        const result = new Function('return ' + expression)();

        // Format the result to avoid extremely long decimals
        const formattedResult = parseFloat(result.toFixed(10)).toString();
        display.innerText = formattedResult;
    } catch (error) {
        display.innerText = "Error";
    }
}

/**
 * Adds the input value to the display
 * @param {string} input - The value to add to the display
 */
function addToDisplay(input) {
    let currentValue = display.innerText;

    // Prevent multiple decimal points in a single number
    if (input === '.') {
        // Split by operators to get the last number part
        const parts = currentValue.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];

        // If the last part already has a decimal, don't add another
        if (lastPart.includes('.')) {
            return;
        }
    }

    // Prevent multiple operators in a row
    const lastChar = currentValue.slice(-1);
    if (['+', '-', '*', '/'].includes(input) && ['+', '-', '*', '/'].includes(lastChar)) {
        // Replace the last operator with the new one
        display.innerText = currentValue.slice(0, -1) + input;
        return;
    }

    // Add the input to the display
    display.innerText += input;
}

/**
 * Clears the display
 */
function clearAll() {
    display.innerText = "";
}

/**
 * Deletes the last character from the display
 */
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}