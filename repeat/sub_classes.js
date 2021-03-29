//Sub classes

class Person { 
    constructor(firstName, lastName) { //person class with constructor
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
       return `Hello there ${this.firstName} ${this.lastName}`;
   }
}

class Customer extends Person {
   constructor(firstName, lastName, phone, membership) {
       super(firstName, lastName);  //call parent class constructor

       this.phone = phone;
       this.membership = membership;
   }

   //customer specific methods
   static getMembershipCost(){
       return 500;
   }
}

//const person1 = new Person('Martin', 'Andriu');
//console.log(person1.greeting());

const martin = new Customer('Martin', 'Andriu', '8-699-565656', 'Standard');

console.log(martin.greeting());

console.log(Customer.getMembershipCost());
//console.log(Person.getMembershipCost()); //doesn't work because we extend customer