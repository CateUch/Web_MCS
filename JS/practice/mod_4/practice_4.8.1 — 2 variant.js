console.log('You are at ' + window.location);

function haveEnough(money,numApple,numBread,priceApple,priceBread,count) {

money = parseFloat(prompt("сколько у вас с собой есть денег?"));
numApple = parseFloat(prompt("сколько вы купили яблок?"));
numBread = parseFloat(prompt("сколько вы купили батонов хлеба?"));
priceApple = parseFloat(prompt("сколько стоит одно яблоко?"));
priceBread = parseFloat(prompt("сколько стоит один батон хлеба?"));
count = numApple*priceApple+numBread*priceBread;

if (money>=count) {
  alert ('У вас достаточно денег');
    } else {
      alert ('У вас недостаточно денег');
    } 
 }
 
haveEnough();

function sum() {
	alert ('Потрачено - ' + count + ' руб');
}

sum();