// Finding if a number is Armstrong number or not 
let number = +prompt('Enter a number');
let numStr = number.toString();
let armsSum = 0;
for (let digit of numStr){
    digit = Number(digit);
    armsSum += digit**3;
}

if (armsSum == number){
    console.log(`${number} is Armstrong number`);
}else{
    console.log(`${number} is not Armstrong number`);
}