const section = document.querySelector('.section')
const titleMenu = document.querySelector('.title_menu')
const titleMenuContent = document.querySelector('.title_menu__content')
const titleMenuArrowDown = document.querySelector('.title_menu__arrow_down')
const mainContent = document.querySelector('.main_content')

// Welcome animation timing
let startTime = 1000;
let stepTime = 500;

document.addEventListener('DOMContentLoaded',()=>{
    welcomeAnimation();
})

function welcomeAnimation(){
    setTimeout(()=>{
        titleMenuContent.classList.add('title_menu__content--vertical')
    },startTime)
    setTimeout(()=>{
        section.classList.add('section','section--m5vh')
    },startTime+= stepTime)
    setTimeout(()=>{
        titleMenu.classList.add('title_menu--w50')
        mainContent.classList.add('main_content--w50')
    },startTime+= stepTime)
    setTimeout(()=>{
        show(titleMenuArrowDown);
    },startTime+stepTime)
}

function hide(element){
    element.style.visibility = 'hidden';
    element.style.opacity = 0;
}

function show(element){
    element.style.visibility='visible';
    element.style.opacity=1;
}
