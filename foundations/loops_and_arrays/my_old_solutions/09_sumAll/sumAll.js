const sumAll = function(start, stop) {
    if (!Number.isInteger(start) || 
        !Number.isInteger(stop) || 
        start < 0 || 
        stop < 0) {
        return 'ERROR';
    }

    if (start > stop) [start, stop] = [stop, start];
    range = Array(stop - start + 1).fill(start).map((val, index) => val + index);

    return range.reduce((total, current) => total + current);
};

// Do not edit below this line
module.exports = sumAll;
