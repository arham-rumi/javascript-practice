// Finding if the triangle is equilateral, scalene, or isosceles
let side1 = +prompt('Enter length of Side 1:');
let side2 = +prompt('Enter length of Side 2:');
let side3 = +prompt('Enter length of Side 3:');
if (side1 == side2 && side2 == side3){
    console.log('Triangle is Equilateral');
}else if ((side1 == side2 || side2 == side3 || side3 == side1) && (side1 != side2 || side2 != side3 || side1 != side3)){
    console.log('Triangle is isosceles');
}else{
    console.log('Triangle is scalene');
}