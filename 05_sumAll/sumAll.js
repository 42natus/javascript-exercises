const sumAll = function(beginInteger, endInteger) {
    const allIntegers = [];
    let sum = 0;

    if (beginInteger < 0 || endInteger < 0) {
        return "ERROR";
    } else if (!(Number.isInteger(beginInteger) && Number.isInteger(endInteger))) {
        return "ERROR";
    }

    // Work whether or not the larger number is the first argument
    let begin = (beginInteger < endInteger) ? beginInteger : endInteger;
    let end = (beginInteger < endInteger) ? endInteger : beginInteger;

    allIntegers[0] = begin;
    
    nextNumber = ++begin;

    let i = 1;

    let control = true;

    while (control) {
        allIntegers[i] = nextNumber;
        
        if (nextNumber == end) {
            control = false;
        }

        nextNumber++;
        i++;
    }

    for (let i = 0; i < allIntegers.length; i++) {
        sum += allIntegers[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
