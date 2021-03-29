document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){ //pass event
    const number = document.querySelector('input[type="number"]').value; //grab onl inptut type number //.value means we want value

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            

            let output = '';
            if(response.type === 'success' ) {
                response.value.forEach(function(joke){
                   output += `<li> ${joke.joke} </li>`
                });  //loop throught the value
            } else {
                output += `<li> Somenthing went wrog </li>`;
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault(); //prevent dafaut behavior
} 