let search = document.querySelector('.search-box');
let menu = document.querySelector('.navbar');
let header = document.querySelector('header');
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');

// Function to toggle active class for search box
const toggleSearchBox = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
    localStorage.setItem('searchActive', search.classList.contains('active'));
    localStorage.setItem('menuActive', false);
};

// Function to toggle active class for menu
const toggleMenu = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
    localStorage.setItem('menuActive', menu.classList.contains('active'));
    localStorage.setItem('searchActive', false);
};

// Function to set active class based on stored values
const setActiveClasses = () => {
    const isSearchActive = JSON.parse(localStorage.getItem('searchActive'));
    const isMenuActive = JSON.parse(localStorage.getItem('menuActive'));

    if (isSearchActive) {
        search.classList.add('active');
    } else {
        search.classList.remove('active');
    }

    if (isMenuActive) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
};

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
};

// Header shadow effect
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Set active classes on page load
setActiveClasses();

// Click event for search icon
document.querySelector('#search-icon').onclick = toggleSearchBox;

// Click event for menu icon
document.querySelector('#menu-icon').onclick = toggleMenu;

// Set marker position
function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

// Event listeners for menu items
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
});
