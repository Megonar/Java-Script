function sayHello(name) {
    let response = `Привет, ${name}`;
    return response;
}

function returnNeighboringNumbers(number) {
    let firstNumber = number - 1;
    let lastNumber = number + 1;
    return [firstNumber, number, lastNumber];
}

function getMathResult(startNumber, count) {
    if (typeof count !== 'number' || count <= 0) {
        return startNumber;
    }

    let result = startNumber;

    for(let i = 1; i < count; i++) {
        result += `---${startNumber * (i + 1)}`;
    }

    return result;
}
