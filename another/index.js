const c = document.querySelector('.nav_toggle--close') //yellow 
const o = document.querySelector('.nav_toggle--open') //white
const m = document.querySelector('.nav-menu')
const l = document.querySelectorAll('ul > li')

o.addEventListener('click' , e => {
    m.classList.remove('isHidden')
    o.style.visibility = "hidden";
    c.style.visibility = "visible";
    o.style.opacity = "0"
    c.style.opacity = "1"
    l.forEach( e => {
        e.classList.remove('ishidden')
    })
    
})


c.addEventListener('click' , e => {
    m.classList.add('isHidden')
    o.style.visibility = "visible";
    c.style.visibility = "hidden";
    o.style.opacity = "1"
    c.style.opacity = "0"
    l.forEach( e => {
        e.classList.add('ishidden')
    })
})