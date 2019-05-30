console.log('You are at ' + window.location);

//const APIKey = 'a9ca00ca7ce764f9c53891f4e63735f6';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=a9ca00ca7ce764f9c53891f4e63735f6';
const form = document.forms[0];
const divName = document.querySelector('.personName');
const divIcon = document.querySelector('.icon');

class Person {
constructor (name) {
	this.name = name;
	this.happiness = 0
	}
	hasCat() {
	this.happiness++;
	console.log(this.happiness);
	}
	hasRest() {
	this.happiness++;
	console.log(this.happiness);
	}
	hasMoney() {
	this.happiness++;
	console.log(this.happiness);
	}
	isSunny() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);

		if (xhr.status != 200) {
			return (xhr.status + " " + xhr.statusText);
		}  
		if ((DATA.main.temp-273)>15) {
		 console.log(DATA.main.temp-273);
		return(this.happiness++);
		} else {return(this.happiness);
		}
	}
}

form.onsubmit = function(e) {
e.preventDefault();

let name = form.elements.name.value;
let cat = form.elements.cat.value;
let rest = form.elements.rest.value;
let money = form.elements.money.value;

let Someone = new Person(name);
console.log(Someone);

	if (cat == 'yes'){
		Someone.hasCat();
	} if (rest == 'yes'){
		Someone.hasRest();
	}	if (money == 'yes') {
		Someone.hasMoney();
	} 
	Someone.isSunny();

	console.log('happiness = ' + Someone.happiness);
	console.log(Someone.happiness == 4);


	if (Someone.happiness > 3) {
		console.log("Right");
		divIcon.innerHTML = '😁';
	} if (Someone.happiness == 3 || 2) {
		divIcon.innerHTML = '😐';
	} if (Someone.happiness < 2) {
		divIcon.innerHTML = '☹️';
	}

	divName.innerHTML = name;
}