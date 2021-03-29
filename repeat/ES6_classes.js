class Person {
    constructor(firstName, LastName, dob) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.birthday = new Date (dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.LastName}`;
    }

    calcAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }  
    
    getsMarried(newLastName) {
        this.LastName = newLastName;
    }

    //Static
    static addNumbers(x,y) {
        return x + y;
    }
}

const mary = new Person ('Mary', 'Williams', '1986-5-25');

mary.getsMarried('Thomson');

console.log(mary);

//for static method we should use class name //for stand alone methods without with .this
console.log(Person.addNumbers(1,2));

