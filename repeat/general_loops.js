// FOR LOOP (when you know how many iterations run)


for(let i=0; i<10; i++){
    if(i===2) {
        console.log('2 is my favoure number');
        continue; //stops loot and goes to next iteration
    }

    if(i===5){
        console.log('Stop the loop');
        break;
    }
    console.log('Number ' + i);
}


//WHILE LOOP


let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}


// DO WHILE LOOP


let i =0;

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);


//LOOP THROUGHT ARRAY

const cars = ['Ford', 'Audi', 'Opel', 'Volvo'];

for(let i = 0; i <cars.length; i++){
    console.log(cars[i]);
}


//FOREACH

cars.forEach(function(car){
    console.log(car);
});


//With index

cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});


//With entire array

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});


//MAP

const users = [
    {id:1, name:'Martin' },
    {id:2, name:'Sara' },
    {id:3, name:'Karen' },
    {id:4, name:'Steve' }
];

const ids = users.map(function(user){
  return user.id;  
});

console.log(ids);


//FOR IN LOOP

const user = {
    firstName: 'Martin',
    lastName: 'Andriu',
    age: 44
}

for(let x in user){
   // console.log(x);   //x gives key inside object
   console.log(`${x} : ${user[x]}`);    //if we want to the get object
}