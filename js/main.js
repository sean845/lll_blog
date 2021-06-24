'use strict';

{
    // ハンバーガー
    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
    });
    // ハンバーガー

    // フェードイン
    const fadeIn = document.getElementById('img');
    fadeIn.animate([{opacity: '0'}, {opacity: '2'}], 1500);
    // フェードイン
    
    // メニューバー
    const contact = document.getElementById('contact');
    const sns = document.getElementById('sns');
    contact.addEventListener('click', () => {
        sns.classList.toggle('menu-bar');
    });
    // メニューバー


    // ページ
    const page = document.getElementById('page');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        scrollTo((0, 0), 2000);
    });
    // ページ


    // カウントアップ
    const numbers    = document.getElementById('.counter');
    const speed = 200;
    
    numbers.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            const inc = target / speed;
            
            if(count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
    // カウントアップ

    // 写真に文字追加
    const natureImage = document.querySelector('nature-img');
    const nature = document.getElementById('nature');

    natureImage.addEventListener('mouseover', () => {
        nature.classList.add('spin');
    });

    // 写真に文字追加

}
