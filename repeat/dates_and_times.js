let val;

const today = new Date();
let birthday = new Date('8-11-1965 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981'); 



val = today; //it is object (typeof val)
val = today.toString(); //convert to string 

val = birthday; //changed data ant time

val = today.getMonth(); //now is 2021-03-25 but shows 2 month because zero based january is 0
val = today.getDate(); //get date of the month
val = today.getDay(); //numerical representation of the day, it is 4 (thursday)
val = today.getFullYear(); //shows 2021
val = today.getHours(); //shows 14
val = today.getMinutes(); //shows 8
val = today.getSeconds(); 
val = today.getMilliseconds();

//timestamp
val = today.getTime(); //1616674295385

birthday.setMonth(2); //set a month for birthday
birthday.setDate(12); //set a day for birthday
birthday.setFullYear(1984); //set fulldate for birthday
birthday.setHours(3);  //set hours for birthday
birthday.setMinutes(15); //set hours for birthday
birthday.setSeconds(25); //set hours for birthday

console.log(birthday);

//look more google  "javascript date object"