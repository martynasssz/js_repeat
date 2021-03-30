const sayHello = function() {
    console.log('Hello');
}

//coverting to arrow function
const sayHello1 = () => {
    console.log('Hello');
}

//one line function does not need braces
const sayHello2 = () => console.log('Hello');

//one line returns
const sayHello3 = () => 'Hello'; //return hello (for returning) 

//Return object
const sayHello4 = () => ({msg: 'Hello'}); //return object literal

//single param does not need parentheses
const sayHello5 = name => console.log(`Hello ${name}`); 


//Multipal params need parentheses
const sayHello6 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`); 

sayHello();
sayHello1();
sayHello2();
console.log(sayHello3());
console.log(sayHello4()); 
sayHello6('Martin', 'Andriu');

const users = ['Roman', 'Tom', 'Kristina'];

//regular
const nameLenghts = users.map(function(name){
    return name.length;
})
 
//make shorter using arrow function
const nameLenghts1 = users.map((name) => {
    return name.length;
})

//make shortest using arrow function
const nameLenghts2 = users.map(name => name.length);

console.log(nameLenghts);
console.log(nameLenghts1);
console.log(nameLenghts2);