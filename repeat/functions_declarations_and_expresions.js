//FUNCTION DECLARATIONS

function greet(firstName = 'Martin', lastName = 'Andriu'){  //parameters/arguments inside function 
    //if(typeof firstname === 'undefined') {firstName = 'Martin'} ES5
    //if(typeof firstname === 'undefined') {lastName = 'Andriu'} ES5
    //console.log('Hello); 
 
     return 'Hello ' + firstName + ' ' + lastName;
 }
 
 //console.log(greet('John', 'Anton'));
 
 //FUNCTION EXPRESIONS
 
 const squere = function(x = 3){ //anonymus function
     return x*x;
 };
 
 //console.log(squere());
 
 //IMMIDIATLY INVOKABLE FUNCTION EXPRESIONS -IIFEs (functions declare and run at the same time)
 
 (function(){
     console.log('IIFE Ran..');
 })();
 
 (function(name){
     console.log('Hello ' + name);
 })('Martin');
 
 //PROPERTY METHOD  (functions inside objects)
 
 const todo = {
     add: function(){
         console.log('Add todo..');
     },
     edit:function(id){
         console.log(`Edit todo ${id}`);
     }
 }
 
 //function defined outside
 todo.delete = function(){
     console.log('Delete todo..');
 }
 
 
 todo.add(); //call function 
 todo.edit(22);
 todo.delete();