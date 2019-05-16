
//Создайте форму, которая будет по сабмиту рассчитывать синус введенного
//в input угла. Вам понадобится найти этот метод объекта Math.

const form = document.forms[0];

form.onsubmit = function (e) {
	e.preventDefault();
	console.log(Math.sin(form.elements.degrees.value));
}