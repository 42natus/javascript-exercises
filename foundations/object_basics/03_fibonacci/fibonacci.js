const fibonacci = function(n) {
    n = parseInt(n);

    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    let first = 1;
    let second = 1;
    for (let i = 2; i < n; i++) {
        [first, second] = [second, first + second];
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
