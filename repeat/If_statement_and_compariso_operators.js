// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;


//EQUAL TO
if(id == 101){  //testing value not type
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//NOT EQUAL TO
if(id != 101){ //testing value not type
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// EQUAL TO VALUE AND TYPE
if(id === 100){  //testing value not type
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//NOT EQUAL TO VALUE AND TYPE
if(id !== 100){  //testing value not type
    console.log('Correct');
} else {
    console.log('Incorrect');
}


//check is ID actually defined
//Test if undefined
if(typeof id !== 'undefined'){ //if exist
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}


// Grater or less then
// < or >

//IF ELSE

const color = 'yellow';


if(color === 'red') {
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red and blue');
}


//LOGICAL OPERATORS
// && AND

const name = 'Martin';
const age = 70;

if(age > 0 && age < 12) {
    console.log(`${name} is a child` );    
} else if(age>=13 && age <=19) {
    console.log(`${name} is a teenager`);  
} else {
    console.log(`${name} is adult`);
}

// || OR
if(age < 16 || age > 65) {
    console.log(`${name} can not run in race` );    
} else {
    console.log(`${name} is registered to race`);
}

//TERNARY OPERATOR
console.log(id ===100 ? 'CORRECT' : 'INCORECT') //if(id === 100) // ? then 'CORRECT' //: 'INCORECT'

//WITHOUT BRACES (Works without braces) not recomended
if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORECT');