
//Создайте форму, которая будет по сабмиту рассчитывать синус введенного
//в input угла. Вам понадобится найти этот метод объекта Math.

const form = document.forms[0];
const result = document.querySelector('h2');

form.onsubmit = function (e) {
	e.preventDefault();
	//console.log(Math.sin(form.elements.degrees.value));
	result.innerHTML = (Math.sin(form.elements.degrees.value) + ' rad');
}