const hamburger = document.querySelector('.hamburger__icon--button');
const navMenu = document.querySelector('.openMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});