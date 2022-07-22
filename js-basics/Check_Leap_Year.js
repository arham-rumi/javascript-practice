// Finding if the given year is leap year or not
let year = +prompt('Enter year: ');
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`Year: ${year} is leap year`);
} else{
    console.log(`Year: ${year} is not leap year`);
}