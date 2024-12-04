const reverseString = function(string) {
    stringToArray = string.split("");

    let reversedString = "";

    for (i = stringToArray.length-1; i >= 0; i--) {
        reversedString = reversedString.concat(stringToArray[i]);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
