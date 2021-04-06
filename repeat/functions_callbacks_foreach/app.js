//functions

const speak  = function(name, time) {
   console.log(`good ${time}, ${name}`)
}

speak(55, 'Andrius');

//arrow functions

const calcArea = function(radius) {
   let area = 3.14 * radius**2;
   return area;
}

const area = calcArea(5);
console.log(area);

//
const greet = () => 'Hello world';
console.log(greet);


// arrow functions

const bill = (product, tax) => {
   let total = 0;
   for(let i = 0; i < product.length; i++) {
      total +=product[i] + product[i]*tax;
   }
   return total;
}

const total = bill([10,15,30], 0.2);
console.log(total);

// --- callbacks & foreach ---

const myfunc = (callbackFunc) => {
   // do something
   let value = 50;
   callbackFunc(value);
};

//regulur function
/*
myfunc(function(value) {
   console.log(value);
});
*/

//arrow function
myfunc(value => {
   //do somenthing
   console.log(value);
});

//another example
let people = ['mario', 'tom', 'martin', 'shaun', 'chun-li'];

/*
people.forEach(function(){
   console.log('something'); //show something 5 times
})
*/ 

/*
people.forEach(function(person){
   console.log(person);
});

*/

//converted to array function
people.forEach(person => {
   console.log(person);
});

//optional parameter index
people.forEach((person, index) => {
   console.log(index, person);
});

//define callback function separatelly
const logPerson = (person, index) => {
   console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//practice 
//get a reference to the 'ul'

const ul = document.querySelector('.people');
let people1 = ['mario', 'tom', 'martin', 'shaun', 'chun-li'];

let html = ``; //set for empty template string

/*
people1.forEach(function(person){
   //create a html template for each person
   //append set html for each person
   html+= `<li style="color: person"> ${person} </li>`;
});

console.log(html); //we got html code
ul.innerHTML = html; //innerHTML is property //set to people class
*/

//conver to arrow function
people1.forEach(person => {
   //create a html template for each person
   //append set html for each person
   html+= `<li style="color: person"> ${person} </li>`;
});

console.log(html); //we got html code
ul.innerHTML = html; //innerHTML is property //set to people class


