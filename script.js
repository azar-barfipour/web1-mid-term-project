let button = document.querySelector('.button');
let ul = document.querySelector('ul');
let div = document.querySelector('.backdrop');

button.addEventListener('click',function(){
    ul.classList.add('nav__list--show');
    div.classList.add('show');
})

div.addEventListener('click',function(){
    ul.classList.remove('nav__list--show');
    div.classList.remove('show');
})