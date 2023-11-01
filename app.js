const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero!";
  }
  return x / y;
}

function startCalculator() {
  rl.question("Enter the first number: ", (num1) => {
    const number1 = parseFloat(num1);

    if (isNaN(number1)) {
      console.log("Invalid input. Please enter a valid number.");
      startCalculator(); // Continue the calculator after an invalid input
    } else {
      rl.question("Enter the second number: ", (num2) => {
        const number2 = parseFloat(num2);

        if (isNaN(number2)) {
          console.log("Invalid input. Please enter a valid number.");
          startCalculator(); // Continue the calculator after an invalid input
        } else {
          rl.question("Choose operation (+, -, *, /), or type 'exit' to quit: ", (operator) => {
            if (operator === 'exit') {
              rl.close();
            } else {
              switch (operator) {
                case '+':
                  console.log(`Result: ${add(number1, number2)}`);
                  break;
                case '-':
                  console.log(`Result: ${subtract(number1, number2)}`);
                  break;
                case '*':
                  console.log(`Result: ${multiply(number1, number2)}`);
                  break;
                case '/':
                  console.log(`Result: ${divide(number1, number2)}`);
                  break;
                default:
                  console.log("Invalid operator. Please choose +, -, *, /, or 'exit' to quit.");
              }
              rl.question("Do you want to continue (yes/no)? ", (answer) => {
                if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                  startCalculator(); // Continue the calculator
                } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
                  rl.close(); // Exit the calculator
                }
              });
            }
          });
        }
      });
    }
  });
}

console.log("Simple Calculator");
startCalculator();
