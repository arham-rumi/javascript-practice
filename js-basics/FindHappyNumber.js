// Checking if the given number is a HAPPY NUMBER
let usernumber = +prompt('Enter a number:');
let number = usernumber
let numStr, sqrdNumb;
const numArray = []

while (true){
    numStr = '' + number
    sqrdNumb = 0
    for (let digit of numStr){
        digit = Number(digit)
        sqrdNumb += digit*digit
    }
    number = sqrdNumb
    numArray.push(number)
    if (number == 4){
        console.log(`${usernumber} is not HAPPY`);
        break;
    }
    if (number == 1){
        console.log(`${usernumber} is so HAPPY`);
        break;
    }
}
console.log(`Sequence of numbers: ${numArray}`);
console.log(`Total number of iterations: ${numArray.length}`);