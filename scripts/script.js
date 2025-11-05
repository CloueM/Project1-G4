/* ============================================================
DARK MODE TOGGLE - JavaScript for Theme Switching
============================================================
KEY CONCEPT: JavaScript only needs to toggle ONE attribute.
CSS Custom Properties do ALL the heavy lifting!
   ============================================================ */

// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Switch between light and dark
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

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

// For navigation highlighting
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.menu a');

function setActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        // Check if section is in viewport
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
