//Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting 
Person.prototype.greeting =  function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Martin', 'Andriu');

console.log (person1.greeting( ));

//customer constructor 
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName); //lets to call another function from someone else in current content

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototypes methods
Customer.prototype = Object.create(Person.prototype);

//Make custome.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create a customr 
const customer1 = new Customer ('Tom', 'Smith', '865696666', 'Standart');

console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting()); 
 
 