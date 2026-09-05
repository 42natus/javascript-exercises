const findTheOldest = function(people) {
    const today = (new Date()).getFullYear();
    
    // sort people from oldest to youngest
    let sortedPeople = people.slice().sort((personA, personB) => {
        const ageA = (personA.yearOfDeath) ? personA.yearOfDeath - personA.yearOfBirth : today - personA.yearOfBirth;
        const ageB = (personB.yearOfDeath) ? personB.yearOfDeath - personB.yearOfBirth : today - personB.yearOfBirth;
        return ageB - ageA;
    });

    // return oldest person — from the front of the sorted array
    return sortedPeople[0];
};

/*
// Recreated TOP solution: 

function getAge(birth, death) {
    death ??= (new Date()).getFullYear();    
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge > personAge ? oldest : person;
    });
};

*/

// Do not edit below this line
module.exports = findTheOldest;
