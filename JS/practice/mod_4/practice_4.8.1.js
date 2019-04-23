console.log('You are at ' + window.location);

let money = parseFloat(prompt("сколько у вас с собой есть денег?"));
let numApple = parseFloat(prompt("сколько вы купили яблок?"));
let numBread = parseFloat(prompt("сколько вы купили батонов хлеба?"));
let priceApple = parseFloat(prompt("сколько стоит одно яблоко?"));
let priceBread = parseFloat(prompt("сколько стоит один батон хлеба?"));
let count = numApple*priceApple+numBread*priceBread;

function haveEnough(money,numApple,numBread,priceApple,priceBread,count) {
	if (money>=count) {
        alert ('У вас достаточно денег');
    } else {
        alert ('У вас недостаточно денег');
    } 
   
 }
haveEnough();

 console.log(money);
    typeof money;

    console.log(count);
    typeof count;