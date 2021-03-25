// Create some arrays
const numbers = [43,59,25,11,5,44,15,21];
// create array using array contructor
const numbers2 = new Array(43,59,25,11,5,44,15,21);

const fruit = ['Apple', 'Banana', 'Orange', 'Mango'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date() ]; //..object, dates

let val;

// Get array lenght
val = numbers.length;

// chech if is array
val = Array.isArray(numbers); //returns true
//val = Array.isArray('hello'); //returns halse 

//Get a single value from array
val = numbers[3]; //returns 11
val = numbers[0]; // returs 43

//Insert into arrays
numbers[2]=100; // prints in 2 position //changing existing value

//find index of value
val = numbers.indexOf(11);

//MUTATING ARRAYS


//Add on to end
numbers.push(250); //add 250 at the end of array
//add on to front
numbers.unshift(356); //add 356 at the front of array
//take of from end
numbers.pop(); // 250 gone
//take of from front
numbers.shift(); // 356 gone

//Splice values
numbers.splice(1,1); //where we gonna start and end //59 gone

//Reverse an array
numbers.reverse();


//Concatenate array
val = numbers.concat(numbers2); //numbers concat with numbers2

//Sort arrays
val = fruit.sort(); //sort by alphabetic order
//val = numbers.sort();  //sort by the first number


//use the "compare function" //sort from lowest to highest
val = numbers.sort(function(x,y){
    return x - y; 
});

//Reverse sort  //sort highest to lowest
val = numbers.sort(function(x,y){ 
    return y - x; 
});

//Find (testing function)
function under50(num){
    return num < 50;
}

val = numbers.find(under50); //find first number which is after 50

//find over 50
function over50(num){
    return num > 50;
}

val = numbers.find(over50); //find first numbe which is over 50

console.log(numbers); 
console.log(val);
