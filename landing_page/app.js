document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page loaded!');

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    mobileMenuButton.addEventListener('click', () => {
        if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
            mobileNav.style.display = 'block';
        } else {
            mobileNav.style.display = 'none';
        }
    });
});