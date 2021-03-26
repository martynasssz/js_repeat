//  WINDOWS METHODS / OBEJECT/ PROPERTIES

//Alert

alert('Hello world');


//Prompt

const input = prompt();
alert(input);


//Confirm (use when deting something)

if(confirm('Are you sure')){
   console.log('YES'); 
} else {
    console.log('NO');
}


let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollY; //Y vertical axes 0 because have no scrollbar
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //shows querry string

//Redirect
//window.location.href ='http://google.com';

//Reload
//window.location.reload();

//History object
//window.history.go(-2);
val = window.history.length; //4sites visited

// Navigator Object  (do browser itself)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; 
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
