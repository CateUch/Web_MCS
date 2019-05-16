console.log('You are at ' + window.location);

const form =document.querySelector('form');

form.onsubmit = function(e) {
	e.rfeventDefault();
	console.log('Submitted');
}