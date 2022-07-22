// Finding if the input is a number or not
let num = prompt('Enter a number : ')
numFlag = false
if (!isNaN(num)) {
    numFlag = true
}
console.log(numFlag)

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}