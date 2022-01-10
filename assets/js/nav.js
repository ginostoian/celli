const nav = document.querySelector('.nav-links')
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible')
})