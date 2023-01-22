const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.openmenu');
const closeButton = document.querySelector('.closemenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = "visible";
});