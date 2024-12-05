const removeFromArray = function(array, ...items) {
    return array.filter(value => !(items.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;
