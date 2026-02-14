// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Toggle ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger){
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    // --- Highlight Active Page ---
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const activeLink = document.querySelector(`.nav-links a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(themeToggle) themeToggle.innerText = '☀️ Light';
    } else {
        if(themeToggle) themeToggle.innerText = '🌙 Dark';
    }

    // Listen for click
    if(themeToggle){
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
                themeToggle.innerText = '☀️ Light';
            } else {
                themeToggle.innerText = '🌙 Dark';
            }
            localStorage.setItem('theme', theme);
        });
    }
});