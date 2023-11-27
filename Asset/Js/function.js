const head = document.querySelector("header")
const icon = document.querySelector(".menu")
const navBer = document.querySelector(".heder-nav")


icon.addEventListener('click', ()=>{
    navBer.classList.toggle('active')
    head.classList.add('active')
})
window.addEventListener('scroll', ()=>{
    head.classList.toggle('active', window.scrollY>0)
    navBer.classList.remove('active')
})