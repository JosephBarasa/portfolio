
// the destructuring assignment syntax unpacks object properties into variables

const person = {
    fName: 'Joseph',
    lName: 'Barasa',
    age: 22
};

// destructuring

let {fName, lName, country = 'Kenya'} = person;

console.log(fName + ' ' + lName + ' ' + country);