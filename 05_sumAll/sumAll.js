const sumAll = function(beginInteger, endInteger) {
    const allIntegers = [];
    let sum = 0;
    let i = 1;

    let end, begin;

    if (beginInteger > endInteger) {
        end = beginInteger;
        begin = endInteger;
    } else {
        begin = beginInteger;
        end = endInteger;
    }

    allIntegers[0] = parseInt(begin);
    
    nextNumber = ++begin;

    let control = true;

    while (control) {
        allIntegers[i] = nextNumber;

        if (nextNumber == parseInt(end)) {
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
