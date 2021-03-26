// DOM element
const section = document.querySelector('.section')
const titleMenu = document.querySelector('.title_menu')
const titleMenuContent = document.querySelector('.title_menu__content')
const titleMenuArrowDown = document.querySelector('.title_menu__arrow--down')
const titleMenuArrowUp = document.querySelector('.title_menu__arrow--up')
const mainContent = document.querySelector('.main_content')
const article = document.querySelector('.article')


// Configuration variable
const sectionsName = ['Hi,','about','portfolio','contact']
const sectionsFile = ['hi','about','portfolio','contact']
let sectionsIndex = 0;

// Welcome animation timing
let startTime = 1000
let stepTime = 500

document.addEventListener('DOMContentLoaded',()=>{
    init()
})

async function init(){
    await welcomeAnimation()
    getView(sectionsFile[sectionsIndex])
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
    //handle fast click
    if(index < 0){
        index = 0
    }else if(index > (sectionsName.length-1)){
        index=sectionsName.length-1
    }
    sectionsIndex = index
    //Normal way
    switch (index) {
        case 0 : 
            hide(titleMenuArrowUp)
            titleMenu.classList.replace('title_menu--w25','title_menu--w50')
            mainContent.classList.replace('main_content--w75','main_content--w50')
            titleMenuContent.classList.replace('title_menu__nav','title_menu__content')
            
            break
        case (sectionsName.length-1): 
            hide(titleMenuArrowDown) 
            break
        default: 
            show(titleMenuArrowUp) 
            show(titleMenuArrowDown)
            titleMenu.classList.replace('title_menu--w50','title_menu--w25')
            titleMenuContent.classList.replace('title_menu__content','title_menu__nav')
            mainContent.classList.replace('main_content--w50','main_content--w75')
            break;
    }
    getView(sectionsFile[index])
    changeContent(titleMenuContent,sectionsName[index])
}

function changeContent(element,content){
    element.textContent=content;
}

function getView(viewName){
    let pathView='view/'+ viewName.toLowerCase() + '.php'
    fetch(pathView)
    .then((response)=>response.text())
    .then((content)=>{
        article.innerHTML=content
    })
}