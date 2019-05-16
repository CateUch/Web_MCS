console.log('You are at ' + window.location);

/*let people = ['Vasya', 'Sasha', 'Petya']

console.log(people);

people[0] = 'Yura';
console.log(people[0]);
console.log(people);

let bigArray = [
	[1,2,3],
	[true, false],
	['a', 'b', 'c']
]

console.log(bigArray[1][0]);*/

let biObject = {
	names: ['Vasya', 'Sasha', 'Petya'],
	grades: [
		{
			intern: 1,
			junior: 2
		},
		{
			middle: 3,
			senjor: 4
		}
	]
}

console.log(biObject.names[1]);
console.log(biObject.grades[1].middle);