//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Humberger di klik
document.querySelector('#hamburger-menu').
onClick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar menu sidebar untuk menutup side bar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
