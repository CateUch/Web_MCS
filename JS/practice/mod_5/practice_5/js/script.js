console.log('You are at ' + window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const divs = document.querySelectorAll('div');
const price = document.querySelectorAll ('p');
const names = document.querySelectorAll ('h1');


for (let i=0; i<divs.length; i++) {
  names[i].innerHTML = crypto[i].name;
  price[i].innerHTML = crypto[i].price
  divs[i].style.width =(crypto[i].price)/100 + 'vw';
  divs[i].style.backgroundColor = 'rgb(0, 128,'+(i*128)+')';
}