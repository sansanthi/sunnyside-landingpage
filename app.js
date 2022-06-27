// navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.nav');

navToggle.addEventListener('click', function(){
    navbar.classList.toggle('nav-visible');
})