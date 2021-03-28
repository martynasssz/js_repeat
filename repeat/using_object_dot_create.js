const personPrototypes = { //object with different prototype methods
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }

}

//create object using Object.create

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';// add properties to mary object
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thomson');

console.log(mary.greeting()); //get an object

//another syntax

const martin = Object.create(personPrototypes, {
    firstName: {value: 'Martin'},
    lastName: {value: 'Andriu'},
    age: {value: 37}
}); 

console.log(martin);

console.log(martin.greeting());