//event listener fo button
document.getElementById('button').addEventListener('click', loadData); 

function loadData() {  
  //create an XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'data.txt', true);

  //console.log('READYSTATE', xhr.readyState);

  //Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState); //3 readyState
  }

  xhr.onload = function(){ //onload don't need to check readyState === 4 //1 and 4 readyState
    if(this.status === 200){ //checks properties stutus
       //console.log(this.responseText); 
       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }  

//   xhr.onreadystatechange = function(){ //old syntax
//       console.log('READYSTATE', xhr.readyState);
//       if(this.status === 200 && this.readyState === 4) {
//           console.log(this.responseText);
//       }
//   }

  xhr.oneerror = function(){
      console.log('Request error...');
  }

  xhr.send();   


   // readyState Values
   // 0: request not initialized
   // 1: server connection setablished
   // 2: request receive
   // 3: processing request
   // 4: request finished and responce is ready
  
  
  //HTTP Statuses
  //200: "OK"
  //403: "Forbidden"
  //404: "Not Found"



  
}