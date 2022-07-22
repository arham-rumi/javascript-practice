
// ---------------------------------------------------------------


// Finding if the input is a number or not
// let num = prompt('Enter a number : ')
// numFlag = false
// if (!isNaN(num)) {
//     numFlag = true
// }
// console.log(numFlag)

// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
// ----------------------------------------------------------

// Finding if the triangle is equilateral, scalene, or isosceles
// let side1 = +prompt('Enter length of Side 1:');
// let side2 = +prompt('Enter length of Side 2:');
// let side3 = +prompt('Enter length of Side 3:');
// if (side1 == side2 && side2 == side3){
//     console.log('Triangle is Equilateral');
// }else if ((side1 == side2 || side2 == side3 || side3 == side1) && (side1 != side2 || side2 != side3 || side1 != side3)){
//     console.log('Triangle is isosceles');
// }else{
//     console.log('Triangle is scalene');
// }
// ----------------------------------------------------------------

// Finding if the given number is within the given range
// let num = +prompt('Enter the number to check');
// let start = +prompt('Enter the starting point');
// let end = +prompt('Enter the ending point');

// if (num > start && num < end){
//     console.log(`Given number ${num} is in the range of ${start} to ${end}`);
// }else{
//     console.log(`Given number ${num} is not in the range of ${start} to ${end}`);
// }
// ----------------------------------------------------------------------------

// Performing Arithmetic operations on two numbers
// let num1 = +prompt('Enter the first number: ');
// let num2 = +prompt('Enter the second number: ');
// let operator = prompt('Enter the operator: ');
// switch (operator) {
//     case '+':
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case '*':
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case '/':
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         break;
//     default:
//         console.log(`Invalid operator`);
// }
// ----------------------------------------------------------------------------

// Finding if the given year is leap year or not
// let year = +prompt('Enter year: ');
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`Year: ${year} is leap year`);
// } else{
//     console.log(`Year: ${year} is not leap year`);
// }
// ---------------------------------------------------------------------------

// Checking if the given number is a HAPPY NUMBER
// let usernumber = +prompt('Enter a number:');
// let number = usernumber
// let numStr, sqrdNumb;
// const numArray = []

// while (true){
//     numStr = '' + number
//     sqrdNumb = 0
//     for (let digit of numStr){
//         digit = Number(digit)
//         sqrdNumb += digit*digit
//     }
//     number = sqrdNumb
//     numArray.push(number)
//     if (number == 4){
//         console.log(`${usernumber} is not HAPPY`);
//         break;
//     }
//     if (number == 1){
//         console.log(`${usernumber} is so HAPPY`);
//         break;
//     }
// }
// console.log(`Sequence of numbers: ${numArray}`);
// console.log(`Total number of iterations: ${numArray.length}`);
// --------------------------------------------------------------------


// Finding if a number is Armstrong number or not 
// let number = +prompt('Enter a number');
// let numStr = number.toString();
// let armsSum = 0;
// for (let digit of numStr){
//     digit = Number(digit);
//     armsSum += digit**3;
// }

// if (armsSum == number){
//     console.log(`${number} is Armstrong number`);
// }else{
//     console.log(`${number} is not Armstrong number`);
// }
// ----------------------------------------------------------------


// Finding the Greatest Common Divisor of two numbers
// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');

// let num1DivArr = [num1];
// let num2DivArr = [num2];

// for (let div=0; div <= num1/2; div++) {
//     if (num1 % div == 0) {
//         num1DivArr.push(div);
//     }
// }
// for (let div=0; div <= num2/2; div++) {
//     if (num2 % div == 0) {
//         num2DivArr.push(div);
//     }
// }

// const commonDivs = []

// for (let i = 0; i <= num1DivArr.length; i++){
//     for (let j = 0; j <= num2DivArr.length; j++){
//         if (num1DivArr[i] === num2DivArr[j]) {
//             commonDivs.push(num1DivArr[i]);
//         }
//     }
// }

// let max = commonDivs[0]
// for (let el of commonDivs) {
//     if (el > max && !isNaN(el)) {
//         max = el;
//     }
// }

// // console.log(commonDivs)
// // console.log(num1DivArr)
// // console.log(num2DivArr)
// console.log(`Greatest Common Divisor for ${num1} and ${num2} is ${max}`)
// ------------------------------------------------------------------------------


// Program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
// let rawStr = 'w3resource'
// let tempStr = ''

// for (let char of rawStr) {
//     tempStr = char + tempStr
// }
// console.log(tempStr)
// ------------------------------------------------------------------------------------------------

// Program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
// let rawStr = 'w3resource'
// let newStr = ''
// if (rawStr.length >= 1) {
//     if (rawStr.length === 1) {
//         newStr += rawStr
//     }
//     else{
//         let firstChar = rawStr.charAt(0)
//         let lastChar = rawStr.charAt(rawStr.length - 1)
//         let centralStr = rawStr.substring(1, rawStr.length - 1)

//         newStr += lastChar + centralStr + firstChar
//         console.log(newStr)
//     }
// } else{
//     console.log("String Length must be greater than or equal to 1")
// }
// --------------------------------------------------------------------------------


// Program to find a value which is nearest to 100 from two different given integer values
// let num1 = 99;
// let num2 = 90;

// if ((100 - num1) < (100 - num2)){
//     console.log(`${num1} is closer to 100 than ${num2}`);
// }else{
//     console.log(`${num2} is closer to 100 than ${num1}`);
// }
// ------------------------------------------------------------------------------------------------


// Program to check whether the last digit of the three given positive integers is same
// Approach 1
// let num1 = 105;
// let num2 = 205;
// let num3 = 305;

// let reminder1 = num1 % 100;
// let reminder2 = num2 % 100;
// let reminder3 = num3 % 100;

// if (reminder1 === reminder2 && reminder3 === reminder1) {
//     console.log("All three integers have the same last digit");
// }else{
//     console.log("All three integers don't have the same last digit");
// }

// // Approach 2
// let num1Str = ''+num1;
// let num2Str = ''+num2;
// let num3Str = ''+num3;

// if (num1Str.charAt(2) ===  num2Str.charAt(2) && num3Str.charAt(2) === num1Str.charAt(2)) {
//     console.log("All three integers have the same last digit");
// } else{
//     console.log("All three integers don't have the same last digit");
// }
// ----------------------------------------------------------------------------------------------


// Program to replace every character in a given string with the character following it in the alphabet
// let rawStr = 'This is the raw string to change all the characters that match the given alphabet';
// let alphabet = 'X';

// console.log(rawStr);
// for (let ch of rawStr){
//     if (ch == 'r'){
//         rawStr = rawStr.replace(ch, alphabet);
//     }
// }
// console.log(rawStr);

// usng replaceAll method
// console.log(rawStr.replaceAll(' ', alphabet));
// ------------------------------------------------------------------------------------------------


// Program to capitalize the first letter of each word of a given string
// let rawStr = 'This is the raw string to capitalize each word of a given string';
// let rawStrSplit = rawStr.split(' ');
// let newStr = '';

// for (let i = 0; i < rawStrSplit.length; i++) {
//     newStr += rawStrSplit[i].charAt(0).toUpperCase() + rawStrSplit[i].slice(1) + ' ';
// }
// console.log(newStr);
// ----------------------------------------------------------------------------------


// Program to convert a given number to hours and minutes
// let number = 450;
// let hours = Math.floor(number / 60);
// let minutes = Math.floor(number % 60);
// let timeStr = hours + ':' + minutes
// console.log(timeStr);
// ----------------------------------------------------------------------------------------


// Program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
let arr = [16, 2, 4]

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}

var result = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
            result++;
        }
    }
}
console.log(`Number of pairs = ${result}`);