const section = document.querySelector('.section')
const titleMenu = document.querySelector('.title_menu')
const titleMenuContent = document.querySelector('.title_menu__content')

document.addEventListener('DOMContentLoaded',()=>{
    welcomeAnimation();
})

function welcomeAnimation(){
    setTimeout(()=>{
        titleMenuContent.classList.add('title_menu__content--vertical')
    },1000)
    setTimeout(()=>{
        section.classList.replace('section','section--m5vh')
    },1500)
    setTimeout(()=>{
        titleMenu.classList.add('title_menu--w50')
    },2000)
}