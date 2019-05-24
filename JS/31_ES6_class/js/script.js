console.log('You are at ' + window.location);

class User {
	constructor (name,  email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi () {
		return 'Hello ' + this.name;
	}
}

class Female extends User {
	sayHi () {
		return 'Hi girl';
	}
}

const Man = new User('someone', '123@ex.com', '12345')
console.log(Man);
console.log(Man.sayHi());

const Woman = new Female('Ana', 'ana@ex.com', 'grjglksjdg')
console.log(Woman);
console.log(Woman.sayHi());


