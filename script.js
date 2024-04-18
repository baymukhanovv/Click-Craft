const burgerMenu = document.querySelector('.burger-menu'),
      closeMenu = document.querySelector('.menu-close-btn'),
      navList = document.querySelector('.header-navbar')

burgerMenu.addEventListener('click', () => {
    navList.style.left = 0 ;
})
closeMenu.addEventListener('click', () => {
    navList.style.left = '-100%'
})