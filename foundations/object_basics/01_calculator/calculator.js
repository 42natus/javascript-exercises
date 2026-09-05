const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => number + total, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((total, number) => number * total, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

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

const factorial = function(num) {
  // make a range of all numbers from 1 to num
	range = Array(num).fill(num).map((num, index) => num - index);
  
  return (num === 0) ? 1 : range.reduce((factorial, number) => factorial * number);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
