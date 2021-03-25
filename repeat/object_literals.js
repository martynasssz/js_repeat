//Object literal are difinedin curly braces

const person = {
    firstName: 'Martin', //key value pairs
    lastName: 'Andriu',
    age: 40,
    email: 'martin@dpd.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1999 - this.age; //this age (subtracting age)
    }

}

let val;
val = person; //object inself
//Get a specific value
val = person.firstName;

//another method how to select value from an objects
val = person['firstName'];

val = person.age;
val = person.hobbies; //prints hobbies
val = person.hobbies[1]; //prints sports
val = person.address;
val = person.address.state; //if we want state
val = person.address['city']; //show city
val = person.getBirthYear(); //access function

console.log(val);

const people = [
    {name: 'Martin', age: 44},
    {name: 'Ken', age: 27},
    {name: 'Nancy', age: 40},
];

console.log(people);

for(let i = 0; i < people.length; i++){
    console.log(people[i].name); //print all names from loop
}
