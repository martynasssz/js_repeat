const posts = [
    {title: 'Post One', body: 'this is post one '},
    {title: 'Post Two', body: 'this is post two '}
];

//synchronous way

/*
function createPost(post){
    setTimeout(function(){ //callback
        posts.push(post);
    }, 2000); //run after 2 seconds

}

function getPosts(){
   setTimeout(function() {
     let output = ''
     posts.forEach(function(post){
        output +=`<li>${post.title}</li>`;
     });
     document.body.innerHTML = output;
   }, 1000); 
} 

createPost({title: 'Post three', body: 'this is post three'});

getPosts();

*/
 
function createPost(post, callback){
    setTimeout(function(){ //callback
        posts.push(post);
        callback();    
    }, 2000); //run after 2 seconds

}

function getPosts(){
   setTimeout(function() {
     let output = ''
     posts.forEach(function(post){
        output +=`<li>${post.title}</li>`;
     });
     document.body.innerHTML = output;
   }, 1000); 
} 

createPost({title: 'Post three', body: 'this is post three'}, getPosts);