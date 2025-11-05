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

// Scroll spy for navigation highlighting
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.menu a');

function setActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport (with some offset for better UX)
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Remove active class from all links and add to current
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.parentElement.classList.add('active');
        }
    });
}

// Run on page load and scroll
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
