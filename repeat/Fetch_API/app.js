document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//Get local text file data
function getText() {
    fetch('test.txt')
        .then(function(res){
           return res.text(); //return text because dealing with text
        })
        .then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err){
            console.log(err);
        });
}

//--using array functions-----
function getText() {
    fetch('test.txt')
        .then(res => res.text()) //return text because dealing with text
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));   
}

//Get local json data
function getJson() {
    fetch('posts.json')
        .then(function(res){
           return res.json(); //return text because dealing with json
        })
        .then(function(data){
            console.log(data);
            let output ='';
            data.forEach(function(posts) {
               output += `<li>${posts.title}</li>`;  
            });   
            document.getElementById('output').innerHTML = output;    
        }) 
        .catch(function(err){
            console.log(err);
        });
}

//--using array functions----
function getJson() {
    fetch('posts.json')
        .then(res => res.json()) //return text because dealing with json        
        .then(data => {
            console.log(data);
            let output ='';
            data.forEach(function(posts) {
               output += `<li>${posts.title}</li>`;  
            });   
            document.getElementById('output').innerHTML = output;    
        }) 
        .catch(err =>console.log(err));        
}


//Get local external data
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(res){
           return res.json(); //return text because dealing with external json
        })
        .then(function(data){
            console.log(data);
            let output ='';
            data.forEach(function(user) {
               output += `<li>${user.login}</li>`;  
            });   
            document.getElementById('output').innerHTML = output;    
        }) 
        .catch(function(err){
            console.log(err);
        });
}
 
//--using array functions----
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json()) //return text because dealing with external json
        .then(data => {
            console.log(data);
            let output ='';
            data.forEach(function(user) {
               output += `<li>${user.login}</li>`;  
            });   
            document.getElementById('output').innerHTML = output;    
        }) 
        .catch(err =>console.log(err));  
}