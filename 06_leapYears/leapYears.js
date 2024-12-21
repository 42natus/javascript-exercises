const leapYears = function(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 === 0) {
        return (year % 400 === 0);
    } else {
        return true;
    }

    // let value = (year % 4 !== 0) 
    //     ? false 
    //     : (year % 100 === 0) 
    //         ? (year % 400 === 0)  
    //         : true;

    // return value;
};

// Do not edit below this line
module.exports = leapYears;
