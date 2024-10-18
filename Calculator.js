const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Invalid input. Both arguments must be numbers.");
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation. Supported operations are +, -, *, /.");
        }
    });
}

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);

            calculator(n1, n2, operation)
                .then(result => console.log(`Result: ${result}`))
                .catch(error => console.error(`Error: ${error}`))
                .finally(() => rl.close());
        });
    });
});