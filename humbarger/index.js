const nav = document.querySelector('.menu-icon') 
const p = document.querySelector('.line') 

nav.addEventListener('click' , humbergar)
function humbergar() {
    nav.classList.toggle('open')
    p.classList.toggle('open')
}


