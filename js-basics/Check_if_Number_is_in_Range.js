// Finding if the given number is within the given range
let num = +prompt('Enter the number to check');
let start = +prompt('Enter the starting point');
let end = +prompt('Enter the ending point');

if (num > start && num < end){
    console.log(`Given number ${num} is in the range of ${start} to ${end}`);
}else{
    console.log(`Given number ${num} is not in the range of ${start} to ${end}`);
}