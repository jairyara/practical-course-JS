// Square
console.group('square');
const sideSquare = 5;
console.log('The side of the square measures: ' + sideSquare + 'cm');

const perimeterSquare = sideSquare * 4;
console.log('The perimeter of the square is: ' + perimeterSquare + 'cm');

const areaSquare = sideSquare * sideSquare;
console.log('The area of the square is: ' + areaSquare + 'cm^2');
console.groupEnd();

// Triangle
console.group('Triangle');
const sideOneTriangle = 6;
const sideTwoTriangle = 6;
const baseTriangle = 4;
console.log('The side of triangle measures: ' + sideOneTriangle + 'cm, ' + sideTwoTriangle + 'cm, and it base ', + baseTriangle + 'cm');

const heightTriangle = 5.5;
console.log('The height of the triangle is: ' + heightTriangle + 'cm');

const perimeterTriangle = sideOneTriangle +  sideTwoTriangle + baseTriangle;
console.log('The perimeter of the triangle is: ' + perimeterTriangle + 'cm');

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log('The area of the triangle is: ' + areaTriangle + 'cm^2');
console.groupEnd();

// Circle
console.group('circle');
const PI = Math.round(Math.PI * 1000) / 1000;
const diameterCircle = 10;
const radioCircle = diameterCircle / 2;

const perimeterCircle = Math.round((diameterCircle * PI) * 100) / 100;
console.log('The perimeter of the circle is: ' + perimeterCircle + 'cm');

const areaCircle = PI * (radioCircle *  radioCircle);
console.log('The area of the circle is: ' + areaCircle + 'cm^2');

console.groupEnd();