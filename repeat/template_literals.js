const name = 'Martin';
const age = 35;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without templates string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' 
+ '</li></ul>';

//can be written in separe lines by tags  //old way
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '</ul>';

function hello(){
    return 'hello';
}        

//with template strings(es6) backticks 
html = `
    <ul>
        <li> ${name}</li>
        <li> ${age}</li> 
        <li> ${job}</li> 
        <li> ${city}</li> 
        <li> ${2 + 2}</li>  
        <li> ${hello()}</li> 
        <li> ${age > 30 ? ' Over 30' : 'Under 30'}</li>         
    </ul>    
`;

//show in browser
document.body.innerHTML = html;

