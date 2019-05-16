console.log('You are at ' + window.location);

//const cools = document.getElementsByClassName('cool');
//const cools = document.getElementsByTagName('div');
const cools = document.querySelectorAll('.cool');


cools[0].innerHTML = 'I am the first';
console.log(cools[0]);
//console.log(cools);

