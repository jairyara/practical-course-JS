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

function calculatePerimeterSquare() {
    const sideSquare = document.getElementById('sideSquare');
    const value = sideSquare.value;
    const perimeter = perimeterSquare(value);
    swal('The perimeter is ', +perimeter + 'cm', 'success');
}

function calculateAreaSquare() {
    const sideSquare = document.getElementById('sideSquare');
    const value = sideSquare.value;
    const area = areaSquare(value);
    swal('The area is ', +area + 'cm^2', 'success');
}

function calculatePerimeterTriangle() {
    const sideA = document.getElementById('sideA');
    const sideB = document.getElementById('sideB');
    const base = document.getElementById('base');

    const valueA = parseInt(sideA.value);
    const valueB = parseInt(sideB.value);
    const valueC = parseInt(base.value);

    const perimeter = perimeterTriangle(valueA, valueB, valueC);
    swal('The perimeter is ', perimeter + 'cm', 'success');
}

function calculateAreaTriangle() {
    const base = document.getElementById('base');
    const height = document.getElementById('height');

    const valueA = base.value;
    const valueB = height.value;

    const area = areaTriangle(valueA, valueB);
    swal('The area is ', area + 'cm^2', 'success');
}

function calculatePerimeterCircle() {
    const radio = document.getElementById('radio');

    const value  = radio.value;

    const perimeter = perimeterCircle(value);
    swal('The perimeter is', perimeter + 'cm', 'success');
}


function calculateAreaCircle() {
    const radio = document.getElementById('radio');

    const value = radio.value;

    const area = areaCircle(value);
    swal('The area is ', area + 'cm^2', 'success');
}


function heightTriangle(){
    const sideA = document.getElementById('side1');
    const sideB = document.getElementById('side2');

    const valueA = parseInt(sideA.value);
    const valueB = parseInt(sideB.value);

    if (valueA === valueB) {
        swal('Yes', 'This is an isosceles triangle', 'success');
    } else {
        swal('No', 'This is not an isosceles triangle', 'warning');
    }
}