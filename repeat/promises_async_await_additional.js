//fetch api
/*
const url  = fetch('https://jsonplaceholder.typicode.com/users').then((response)=> { //for resolve
   console.log('resolved', response);
   return response.json();
}).then(data => {
      console.log(data);      
}).catch((err) => {  //for reject
   console.log('rejected', err)
});

//const test = getTodos();
//console.log(test); // returns promise
*/

const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
 };  
 
 console.log(1);
 console.log(2);
 
 getTodos().then(data => {
    console.log('resolved:', data)
 });
 
 console.log(3);
 console.log(4);
 
 //const test = getTodos();
 //console.log(test); // returns promise
