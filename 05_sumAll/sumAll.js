const sumAll = function(beginInteger, endInteger) {
    let begin = beginInteger;
    let end = endInteger;

    if (beginInteger > endInteger) [begin, end] = [end, begin];
    
    let sum = 0;

    if (beginInteger < 0 || endInteger < 0) return "ERROR"; 
    if (!(Number.isInteger(beginInteger) && Number.isInteger(endInteger))) return "ERROR";

    // Work whether or not the larger number is the first argument
    // let begin = (beginInteger < endInteger) ? beginInteger : endInteger;
    // let end = (beginInteger < endInteger) ? endInteger : beginInteger;

    for (let i = begin; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
