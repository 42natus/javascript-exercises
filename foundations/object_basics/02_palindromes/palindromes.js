const palindromes = function (str) {
    const chars = str.split("");
    const alphaNum = chars.filter(char => isAlphaNum(char));
};

function isAlphaNum(character) {
    code = character.charCodeAt(0);
    if (48 <= code && code <= 57 || // character is number
        65 <= code && code <= 90 || // character is uppercase letter
        97 <= code && code <= 122) { // character is lowercase letter
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = palindromes;
