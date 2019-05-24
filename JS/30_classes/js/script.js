console.log('You are at ' + window.location);

let Users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi: function() {return 'Привет'}
}

function User (name, email, password) {
		//конструктор
		this.name = name;
		this.email = email;
		this.password = password;
		this.__proto__ = Users;
}

const Fedya = new User('Федя', 'fedya@ex.com', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi() + ' ' + Fedya.name);

function FUser (name, email, password) {
		//конструктор
		this.name = name;
		this.email = email;
		this.password = password;
		this.__proto__ = Users;
		this.sayHi = function () {return this.name + ', ты зарегистрирована'}
}
 const Alla = new FUser('Алла', 'alla@ex.com', 'qwertyqwerty');
 console.log(Alla);
console.log(Alla.sayHi());