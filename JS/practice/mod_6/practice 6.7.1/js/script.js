/*Создайте класс Customer, у которого будет имя в конструкторе и метод buy, 
выводящий в консоль слово “Куплено”.
Создайте подкласс childCustomer, который наследует конструктор и метод Customer, 
но имеет собственный метод getPresent, который выводит в консоль фразу “Шарик в подарок”.*/

class Customer {
	constructor(name, paymentMethod) {
		this.name = name;
		this.paymentMethod = paymentMethod
	}
	 buy(){
	 	console.log('Куплено');
	 }
}

class childCustomer extends Customer {
	getPresent(){
		console.log('Шарик в подарок');
	}
}

const Peter = new Customer ('Peter', 'by cash')
console.log(Peter);
console.log(Peter.buy());

const John = new childCustomer('John', 'by credit card');
console.log(John);
console.log(John.getPresent());
