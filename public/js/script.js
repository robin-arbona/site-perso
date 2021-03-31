//_______________________
// DOM element
//_______________________

const section = document.querySelector('.section')
const titleMenu = document.querySelector('.title_menu')
const titleMenuContent = document.querySelector('.title_menu__content')
const titleMenuArrowDown = document.querySelector('.title_menu__arrow--down')
const titleMenuArrowUp = document.querySelector('.title_menu__arrow--up')
const mainContent = document.querySelector('.main_content')
const article = document.querySelector('.article')

//_______________________
// Configuration variables
//_______________________

const sectionsName = ['Hi,','about','portfolio','contact']
const sectionsFile = ['hi','about','portfolio','contact']
let sectionsIndex = 0;

// Welcome animation timing
let startTime = 1000
let stepTime = 500
let scrollInterval = 1300
let scrollAllowed = true

document.addEventListener('DOMContentLoaded',()=>{
    init()
})

async function init(){
    await welcomeAnimation()
    getView(sectionsFile[sectionsIndex])
    titleMenuArrowDown.addEventListener('click',async ()=>{
        sectionsIndex++
        changePage(sectionsIndex)
    })
    titleMenuArrowUp.addEventListener('click',async ()=>{
        sectionsIndex--
        changePage(sectionsIndex)
    })
    document.querySelectorAll('a').forEach(element=>{
        if((sectionsFile.indexOf(element.target))>=0){
            element.addEventListener('click',async (e)=>{
                e.preventDefault()
                sectionsIndex = sectionsFile.indexOf(e.target.target)
                changePage(sectionsIndex)
            })
        }
    })
    section.addEventListener('wheel',scrollHandeler)
    
}

function initModal(){
    const modal = document.querySelector('.modal')
    const openModalBtn = document.querySelector('.site_preview__btn')
    hide(modal)
    openModalBtn.addEventListener('click',()=>{
        show(modal)
    })
    document.querySelector(".modal__close_btn").addEventListener('click',()=>{
        hide(modal)
    })
}

async function changePage(){
    await Promise.all([hide(article),hide(titleMenuContent)])
    await navGoTo(sectionsIndex)
    await getView(sectionsFile[sectionsIndex])
    changeContent(titleMenuContent,sectionsName[sectionsIndex])
    show(article)
    show(titleMenuContent)
    if(sectionsFile[sectionsIndex] == 'portfolio'){
        initModal()
    }
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
    return new Promise((resolve,reject)=>{
        element.style.transition=`visibility ${stepTime/2/1000}s, opacity ${stepTime/2/1000}s linear`;
        element.style.visibility = 'hidden'
        element.style.opacity = 0
        setTimeout(()=>{
            resolve()
        },stepTime/2)
    })
}

function show(element){
    element.style.transition=`visibility 0s, opacity ${stepTime/2/1000}s linear`;
    element.style.visibility='visible'
    element.style.opacity=1

}

async function navGoTo(index){

    //handle fast click
    if(index < 0){
        index = 0
    }else if(index > (sectionsName.length-1)){
        index=sectionsName.length-1
    }
    sectionsIndex = index
    boldAhref(sectionsIndex)

    //Normal way
    switch (index) {
        case 0 : 
            await hide(titleMenuArrowUp)
            transforMenu('big')
            break
        case (sectionsName.length-1): 
            transforMenu('small')
            show(titleMenuArrowUp) 
            hide(titleMenuArrowDown) 
            break
        default: 
            transforMenu('small')
            show(titleMenuArrowUp) 
            show(titleMenuArrowDown)
            break;
    }
}

function transforMenu(size = 'small'){
    switch (size) {
        case 'small':
            titleMenu.classList.replace('title_menu--w50','title_menu--w25')
            titleMenuContent.classList.replace('title_menu__content','title_menu__nav')
            mainContent.classList.replace('main_content--w50','main_content--w75')
            break;
        default:
            titleMenu.classList.replace('title_menu--w25','title_menu--w50')
            mainContent.classList.replace('main_content--w75','main_content--w50')
            titleMenuContent.classList.replace('title_menu__nav','title_menu__content')
            break;
    }
}

function changeContent(element,content){
    element.textContent=content;
}

function getView(viewName){
    return new Promise((resolve,reject)=>{
        let pathView='view/'+ viewName.toLowerCase() + '.php'
        fetch(pathView)
        .then((response)=>response.text())
        .then((content)=>{
            article.innerHTML=content
            resolve()
        })
        .catch(()=>{
            console.log('Ajax failed')
            reject()
        })
    })
}

function boldAhref(index){
    document.querySelectorAll('a').forEach(element=>{
        element.classList.remove('selected')
        if((element.target == sectionsFile[index])>0){
            element.classList.add('selected')
        }
    })
}

function scrollHandeler(e){
    if(!scrollAllowed){
        return
    }
    scrollAllowed = false;
    if(e.deltaY>0){
        sectionsIndex++
    } else {
        sectionsIndex--
    }
    changePage(sectionsIndex)
    setTimeout(()=>{
        scrollAllowed = true;
    },scrollInterval)
}