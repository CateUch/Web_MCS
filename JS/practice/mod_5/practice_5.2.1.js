function randomPower(num) {
	return Math.abs((num)**(Math.floor(Math.random()*(10-1)+1)));
}
console.log(randomPower(-4));