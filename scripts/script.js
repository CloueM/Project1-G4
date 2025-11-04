// mobile navigation slide out
const button = document.getElementById('hamburger');
const list = document.getElementById('menu-list');

button.addEventListener('click', function(){
    list.classList.toggle('toggled');
    button.classList.toggle('toggled');
});

// pick a color in pros vs cons section
let color = document.getElementById('color');
const bg = document.querySelector('.pros-box-change');

color.addEventListener('change', function(newColor){
    bg.style.setProperty('--changeMe', newColor.target.value);
});