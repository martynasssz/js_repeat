const http = new EasyHTTP;

//Get Users

//--synchonous method--
/*
http.get('https://jsonplaceholder.typicode.com/users');
console.log(users);
*/

//--asynchonous method--

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


 //  User Data  
 const data = {
     name: 'Martin Andriu',
     username: 'Phatom',
     email: 'andiu@gmail.com'
 }
 

 //Create post

 http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  

//Update post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//Delete post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));

