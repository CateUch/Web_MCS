

const Bodycolor = document.querySelector ("body");
console.log(Bodycolor);
console.log(Bodycolor.style);
let body_inquiry = prompt("Какой будет фон у страницы?");
Bodycolor.style["background-color"] = body_inquiry;

	const Textcolor = document.querySelector (".page");
	console.log(Textcolor.style);
	let text_color = prompt("Какой будет цвет текста на странице?");
	Textcolor.style["color"] = text_color;


		const whoname = document.querySelector ("span.name");
		console.log(whoname);
		let name_inquiry = prompt("Как зовут человека, который вас вдохновляет?");
		whoname.innerHTML = name_inquiry;

			const image = document.querySelector ("img");
			console.log(image);
			let img_inquiry = prompt("Введите адрес картинки?");
            image.setAttribute('src', img_inquiry);

            	const text = document.querySelector ("p");
				console.log(text);
				let text_inquiry = prompt("Введите текст страницы.");
				text.innerHTML = text_inquiry;

				const border = document.querySelector(".shortBio");
				console.log(border);
				border.className +=' animated';



