const list = [
    100,
    200,
    300,
    400,
    500
]

function calculateMediaAritm(list) {
    // let sumList = 0;
    //
    // for (let i = 0; i < list1.length; i++) {
    //     sumList = sumList + list[i];
    // }

    const sumList = list.reduce(
        function (valueAc = 0, element) {
            return valueAc + element;
        }
    );

    return sumList / list.length;
}

//Median
const arrayMedian = [
    100,
    200,
    300,
    400
];

const middleList = parseInt(arrayMedian.length / 2);

function isPar(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let median;

if (isPar(arrayMedian.length)) {
    const element1 = arrayMedian[middleList - 1];
    const element2 = arrayMedian[middleList];

    const calculateMeanElement1andElement2 = calculateMediaAritm([
        element1,
        element2
    ]);

    median = calculateMeanElement1andElement2;

} else {
    median = arrayMedian[middleList];
}

// Mode

const arrayMode = [
    5,
    6,
    7,
    1,
    3,
    9,
    1,
    5,
    8,
    1,
    2,
    5,
    1,
    7
];

const list1Count = {};

arrayMode.map(
    function (element) {
        if (list1Count[element]) {
            list1Count[element] += 1;
        } else {
            list1Count[element] = 1;
        }
    }
);

const list1Array = Object.entries(list1Count).sort(
    function (value, newValue) {
        return value[1] - newValue[1];
    }
);

const mode = list1Array[list1Array.length - 1];