//OBJECT LITERALS
/*
const martin = {
    name: 'Martin',
    age: 30
}

console.log(martin);

console.log(martin.age);
*/

//PERSON CONSTRUCTOR

function Person(name,dob) {
    this.name = name; //constructor has property name
    //this refers to the current instance of the object
    //this.age = age;
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970); // calculate age from bithday //abs absolute
    }
}

//console.log(this); //get windows object when is in global scope
//this.alert(1);

//Instantiate

/*
const martin = new Person('Martin', 25);
const peter = new Person('John',65);

console.log(martin.age);
console.log(peter);
*/

const martin = new Person('Martin', '1983-5-31');
console.log(martin.calcAge()); 

