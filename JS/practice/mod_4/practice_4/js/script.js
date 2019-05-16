

const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const close =  document.querySelector('.closePopup');
const openM =  document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeM = document.querySelector ('.closeMenu');

button.addEventListener('click', () =>{popup.style.display = 'flex'});
close.addEventListener('click', () =>{popup.style.display = 'none'});
openM.addEventListener('click', () =>{menu.style.left = '0'});
closeM.addEventListener('click', ()=>{menu.style.left = '-50vw'});

