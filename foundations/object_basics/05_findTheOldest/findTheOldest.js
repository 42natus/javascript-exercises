const findTheOldest = function(people) {
    const today = (new Date().getFullYear());
    
    // sort people from oldest to youngest
    let sortedPeople = people.slice().sort((personA, personB) => {
        const ageA = (personA.yearOfDeath) ? personA.yearOfDeath - personA.yearOfBirth : today - personA.yearOfBirth;

        const ageB = (personB.yearOfDeath) ? personB.yearOfDeath - personB.yearOfBirth : today - personB.yearOfBirth;

        return ageB - ageA;
    });

    // return oldest person — from the front of the sorted array
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
