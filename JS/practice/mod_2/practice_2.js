let sum = prompt("сколько у вас с собой есть денег?")
parseFloat (sum)
let numApple = prompt("сколько вы купили яблок?")
parseFloat (numApple)
let numBread = prompt("сколько вы купили батонов хлеба?")
parseFloat (numBread)
let priceApple = prompt("сколько стоит одно яблоко?")
parseFloat (priceApple)
let priceBread = prompt("сколько стоит один батон хлеба?")
parseFloat (priceBread)
document.write(sum>=(parseFloat(numApple*priceApple + numBread*priceBread)))


