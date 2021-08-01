// Square
console.group('square');

function perimeterSquare(side) {
    return side * 4;
}

function areaSquare(side) {
    return side * side;
}
console.groupEnd();

// Triangle
console.group('Triangle');
function perimeterTriangle(side1, side2, base) {
    return side1 + side2 + base;
}

function areaTriangle(base, height) {
    return (base * height) / 2
}
console.groupEnd();

// Circle
console.group('circle');
const PI = Math.PI;

function diameterCircle(radio) {
    return radio * 2;
}

function perimeterCircle(radio) {
    const diameter = diameterCircle(radio);
    return diameter * PI;
}

function areaCircle(radio) {
    return PI * (radio * radio);
}

console.groupEnd();