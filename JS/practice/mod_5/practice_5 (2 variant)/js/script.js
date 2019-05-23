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
  },
  {
    name : "Tether",
    price: 2000
  },
  {
    name : "Cardano",
    price: 290
  },
  {
    name : "TRON",
    price: 1789
  }
]

arrLength = crypto.length;

const body = document.querySelectorAll('body');

for (q=0; q<arrLength; q++) {
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var div = document.createElement('div');
  
  document.body.appendChild(h1);
  document.body.appendChild(p);
  document.body.appendChild(div);
}

function randColor() {
   var r = Math.floor(Math.random() * 256);  
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);  
  return "rgb(" + r + "," + g + "," + b + ")";
}

const divs = document.querySelectorAll('div');
const price = document.querySelectorAll ('p');
const names = document.querySelectorAll ('h1');


for (let i=0; i<divs.length; i++) {
  names[i].innerHTML = crypto[i].name;
	price[i].innerHTML = crypto[i].price
	divs[i].style.width =(crypto[i].price)/100 + 'vw';
	divs[i].style.backgroundColor = randColor();
}
