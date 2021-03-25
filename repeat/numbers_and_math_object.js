const num1 = 100;
const num2 = 50;

let val; //initalise val variable

//Simple math with numbers
val = num1 + num2;
val = num1 * num2; 
val = num1 - num2; 
val = num1 / num2; 
val = num1 % num2; //remainder after division

// Math object
val = Math.PI;  //Math is an object meaning that i has properties and methods
val = Math.E;
val = Math.round(2.8); //round to 3
val = Math.ceil(2.4);   //round up use ceil //we get 3
val = Math.floor(2.4);   //round down use ceil //we get 2
val = Math.sqrt(64);  //square root 
val = Math.abs(-3); //absolute number 
val = Math.pow(8, 2);  //power (exponent), get 64
val = Math.min(2,33,4,1, -1,-9);//return min value -9
val = Math.max(2,33,4,1, -1,-9); //return max value 33
val = Math.random();

val = Math.random() * 20; //it gives number decimal between 0 and 19
val = Math.random() * 20 + 1; //gives value between 0 and 20
val = Math.floor(Math.random() * 20 + 1); //is we don't want decimals

console.log(val);
  