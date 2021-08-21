const salaryColombia = colombia.map(
    function (people) {
        return people.salary;
    }
);

const salaryColombiaSorted = salaryColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function isPar(number) {
    return number % 2 === 0;
}

function calculateMediaAritm(list) {
    const sumList = list.reduce(
        function (valueAc = 0, element) {
            return valueAc + element;
        }
    )
    return sumList / list.length;
}

function medianSalaryColombia(list) {
    const middle = parseInt(list.length / 2);

    if(isPar(list.length)) {
        const peopleMiddle1 = list[middle - 1];
        const peopleMiddle2 = list[middle];

        return calculateMediaAritm([peopleMiddle1, peopleMiddle2]);
    } else {
        return list[middle];
    }
}

const spliceStart = (salaryColombiaSorted.length * 90) / 100;
const spliceCount = salaryColombiaSorted.length - spliceStart;

const salaryTopColom = salaryColombiaSorted.splice(
    spliceStart,
    spliceCount
);

const medianGeneralColombia = medianSalaryColombia(salaryColombiaSorted);
const medianTopColombia = medianSalaryColombia(salaryTopColom);


console.log(
    medianGeneralColombia,
    medianTopColombia
    );

