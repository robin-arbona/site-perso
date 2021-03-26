// DOM element
const section = document.querySelector('.section')
const titleMenu = document.querySelector('.title_menu')
const titleMenuContent = document.querySelector('.title_menu__content')
const titleMenuArrowDown = document.querySelector('.title_menu__arrow--down')
const titleMenuArrowUp = document.querySelector('.title_menu__arrow--up')
const mainContent = document.querySelector('.main_content')
const article = document.querySelector('.article')


// Configuration variable
const sections = ['welcome','about','portfolio','contact']
let sectionsIndex = 0;

// Welcome animation timing
let startTime = 1000
let stepTime = 500

document.addEventListener('DOMContentLoaded',()=>{
    init()
})

async function init(){
    await welcomeAnimation()
    getView(sections[sectionsIndex])
    titleMenuArrowDown.addEventListener('click',()=>{
        sectionsIndex++
        navGoTo(sectionsIndex)
    })
    titleMenuArrowUp.addEventListener('click',()=>{
        sectionsIndex--
        navGoTo(sectionsIndex)
    })
}

function welcomeAnimation(){
    return new Promise((resolve,reject)=>{
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
            show(titleMenuArrowDown)
            resolve()
        },startTime+stepTime)
    })
}

function hide(element){
    element.style.transition=`visibility ${stepTime/1000}s, opacity ${stepTime/1000}s linear`;
    element.style.visibility = 'hidden'
    element.style.opacity = 0
}

function show(element){
    element.style.transition=`visibility 0s, opacity ${stepTime/1000}s linear`;
    element.style.visibility='visible'
    element.style.opacity=1

}

function navGoTo(index){
    switch (index) {
        case 0: 
            hide(titleMenuArrowUp) 
            break
        case (sections.length-1): 
            hide(titleMenuArrowDown) 
            break
        default: 
            show(titleMenuArrowUp) 
            show(titleMenuArrowDown)
            break;
    }
    getView(sections[index])
    
}

function getView(viewName){
    let pathView='view/'+ viewName + '.php'
    fetch(pathView)
    .then((response)=>response.text())
    .then((content)=>{
        article.innerHTML=content
    })
}