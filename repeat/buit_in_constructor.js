//strings 

const name1 = 'Tom'; //sets primitive value to variable
const name2 = new String('Tom');  //Strig as object (call a contructor)

//name2.foo = 'bar'; // add properties //property foo - value bar
console.log(name2); 

console.log(typeof name2); //objct

if(name2 === 'Tom'){
    console.log('YES');
} else {
    console.log('NO'); //because name2 is object not a string
}

//Numbers

const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Functions
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x','y','return 1 + 1');

//console.log(getSum2(1,1));

//Objects
const martin1 = {
    name: "Martin"
};

const martin2 = new Object ({ name: "Martin"});

console.log(martin2);

//Arrays 
const arr1 = [1,5,6,7];
const arr2 = new Array(1,5,6,7);

//console.log(arr2);

// Regular Expressions
const re1 = /\w+/; //we looks for word character thats occurs more one or two times
const re2 = new RegExp('\\w+');

console.log(re2); 