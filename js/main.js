'use strict';

{
    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
    });

    const fadeIn = document.getElementById('img');
    fadeIn.animate([{opacity: '0'}, {opacity: '2'}], 1500);

    const contact = document.getElementById('contact');
    const sns = document.getElementById('sns');

    contact.addEventListener('click', () => {
        sns.classList.toggle('menu-bar');
    });


    const page = document.getElementById('page');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        scrollTo((0, 0), 2000);
    });

    

}