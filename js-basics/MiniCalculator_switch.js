// Performing Arithmetic operations on two numbers
let num1 = +prompt('Enter the first number: ');
let num2 = +prompt('Enter the second number: ');
let operator = prompt('Enter the operator: ');
switch (operator) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Invalid operator`);
}