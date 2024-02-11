const numbers = [1, 2, 3, 4, 5, 6, 7];
let index = 0;

const intervalId = setInterval(() => {
    console.log(numbers[index]);

    index++;

    if (index === numbers.length) {
        clearInterval(intervalId);
    }
}, 2000);
