/*
Доработайте скрипт с урока (надеюсь, вы кодили вместе со мной). 
Добавьте на страницу форму с инпутом и кнопку “узнать температуру”.
По сабмиту формы выводите температуру в том городе, который указан в инпуте.

Если чувствуете силы — добавьте второй вывод со скоростью ветра.*/

console.log('You are at ' + window.location);

//const city = 'Санкт-Петербург';
//const cityId = '496638';
const APIKey = 'a9ca00ca7ce764f9c53891f4e63735f6';
//const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey+'';
const cityChoose = document.querySelector('.city');
const form = document.forms[0];
const tempresult = document.querySelector('.temp');
const windresult = document.querySelector('.wind');

form.onsubmit = function(e) {
	e.preventDefault();
	let city = form.elements.city.value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey+'';

let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + " " + xhr.statusText);
} else { 
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	console.log(DATA.wind.speed);
	//document.write(DATA.main.temp-273);
	tempresult.innerHTML =('Температура в г. ' +city+ ' '+ Math.floor(DATA.main.temp-273) + '°C');
	windresult.innerHTML =('Скорость ветра '+ (DATA.wind.speed) + ' м/с');
}}











