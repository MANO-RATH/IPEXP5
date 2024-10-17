function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Error: Both inputs must be numbers.");
            return;
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
        }
    });
}

function performCalculation(num1, num2, operation) {
    calculator(num1, num2, operation)
        .then(result => {
            console.log(`Result: ${result}`);
        })
        .catch(error => {
            console.error(error);
        });
}

performCalculation(10, 5, 'add');       
performCalculation(10, 5, 'subtract');  
performCalculation(10, 5, 'multiply');  
performCalculation(10, 5, 'divide');    
performCalculation(10, 0, 'divide');    
performCalculation(10, 5, 'modulus');    
performCalculation('a', 5, 'add');      