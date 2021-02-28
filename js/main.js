'use strict';

{
    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
    });

    const fadeIn = document.getElementById('img');
    fadeIn.animate([{opacity: '0'}, {opacity: '2'}], 1500);

}
