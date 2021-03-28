//Object.prototype
//Person.prototype

//Person constructor

function Person(firstName, lastName, dob) {
    this.firstName = firstName; //constructor has property name
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calcAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970); // calculate age from bithday //abs absolute
    // }
}

//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName} `;
}

//Gets married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person ('Martin', 'Andriu', '1981-8-15');
const mary = new Person ('Mary', 'Johson', '1999-9-15');

console.log(mary);

console.log(john.calculateAge()); 

console.log(mary.getFullName()); 

mary.getsMarried('Smith'); 

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); //in prototype it is not pats of it's own property