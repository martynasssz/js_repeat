let val;

// Number to string      
//if we want value convert  to string
val = String(555); 
val = String(4+4);

// Bool to string
val = String(true);
// Date to string 
val = String(new Date()); 
// Array to string
val = String([1,2,3,4]);

//toString() method
val = (5).toString();
val = (true).toString();

//string to number
val = Number('5');
val = Number(true); //gives one
val = Number(false); //gives zero
val = Number(null); //gives zero
val = Number('hello'); //gives NaN (not a number)
val = Number([1,2,3,4]); //gives NaN (not a number)

val = parseInt('100.30'); //parse as integer 100
val = parseFloat('100.30'); //parse as integer 100.3

//Output 
console.log(val);
console.log(typeof val);
//console.log(val.length);  //lenght only works on strings because it's a tring property
console.log(val.toFixed()); //allows specify decimals (how many digits after comma)

const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum); //sum =56
console.log(typeof sum); //get string
