console.log('You are at ' + window.location);

function haveEnough() {
    if (money>=count) {
        alert ('У вас достаточно денег');
    } else {
        alert ('У вас недостаточно денег');
    } 
 }
 
let money = parseFloat(prompt("сколько у вас с собой есть денег?"));
let numApple = parseFloat(prompt("сколько вы купили яблок?"));
let numBread = parseFloat(prompt("сколько вы купили батонов хлеба?"));
let priceApple = parseFloat(prompt("сколько стоит одно яблоко?"));
let priceBread = parseFloat(prompt("сколько стоит один батон хлеба?"));
let count = numApple*priceApple+numBread*priceBread;
 
haveEnough();