const numbers = [1, 2, 3, 4, 5];

numbers[Symbol.iterator] = function() {
    let index = 0;
    const array = this;

    return {
        next() {
            if (index < array.length) {
                // Return the square of the current element
                const value = array[index] * array[index];
                index++;
                return { value, done: false };
            } else {
                // End of iteration
                return { done: true };
            }
        }
    };
};


for (let square of numbers) {
    console.log(square); 
}