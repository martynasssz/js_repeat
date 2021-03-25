const firstName = 'Martin';     
const lastName = 'Andriu'; 
const age = 36;
const str = 'Hello my name is Martin';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Concatination
val = firstName + ' ' + lastName; //with space

//Append
val = 'Martin ';
val += 'Andriu'; //append action +=
val = 'My name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s awesome, I can\'t wait'; //escape single quete

// Length
val = firstName.length; //length is property no need() returns 6 

// Concat
val = firstName.concat(' ', lastName); // concat method

// Change case
val = firstName.toUpperCase(); //change to upper case
val = firstName.toLowerCase(); //change to lower case

//Treat strings, read only array
val = firstName[0]; //shows m letter

//indexod()
val = firstName.indexOf('i'); //index of letter
val = firstName.lastIndexOf('n'); //comes from left to right

//charAt()
val = firstName.charAt('2'); //finds letter form left to right

//get last character of the string (tring can change)
val = firstName.charAt(firstName.length - 1); //last character will -1

//substring()
val = firstName.substring(0, 4); //gives part of the strin it will be     Mart

//slice (mostly use with arrays)
val = firstName.slice(0, 4); // similar to substring
val = firstName.slice(-3); //stars from right to left and fing three characters

//split()  split string into array on a separator
val = str.split(' '); //split by word
val = str.split(''); // split by letter

val = tags.split(','); //split by comma

// replace
val = str.replace('Martin', 'Jack'); //search martin and replace Jack

//includes()
val = str.includes('Hello'); //gives true of false value //gives true bcause Hello is included

console.log(val);


