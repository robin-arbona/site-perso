"use strict";

//_______________________
// DOM element
//_______________________
var section = document.querySelector('.section');
var titleMenu = document.querySelector('.title_menu');
var titleMenuContent = document.querySelector('.title_menu__content');
var titleMenuArrowDown = document.querySelector('.title_menu__arrow--down');
var titleMenuArrowUp = document.querySelector('.title_menu__arrow--up');
var mainContent = document.querySelector('.main_content');
var article = document.querySelector('.article'); //_______________________
// Configuration variables
//_______________________

var sectionsName = ['Hi,', 'about', 'portfolio', 'contact'];
var sectionsFile = ['hi', 'about', 'portfolio', 'contact'];
var sectionsIndex = 0; // Welcome animation timing

var startTime = 1000;
var stepTime = 500;
document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  return regeneratorRuntime.async(function init$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(welcomeAnimation());

        case 2:
          getView(sectionsFile[sectionsIndex]);
          titleMenuArrowDown.addEventListener('click', function _callee() {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    sectionsIndex++;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(navGoTo(sectionsIndex));

                  case 3:
                    getView(sectionsFile[sectionsIndex]);
                    changeContent(titleMenuContent, sectionsName[sectionsIndex]);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          titleMenuArrowUp.addEventListener('click', function _callee2() {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    sectionsIndex--;
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(navGoTo(sectionsIndex));

                  case 3:
                    getView(sectionsFile[sectionsIndex]);
                    changeContent(titleMenuContent, sectionsName[sectionsIndex]);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function welcomeAnimation() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      titleMenuContent.classList.add('title_menu__content--vertical');
    }, startTime);
    setTimeout(function () {
      section.classList.add('section', 'section--m5vh');
    }, startTime += stepTime);
    setTimeout(function () {
      titleMenu.classList.add('title_menu--w50');
      mainContent.classList.add('main_content--w50');
    }, startTime += stepTime);
    setTimeout(function () {
      show(titleMenuArrowDown);
      resolve();
    }, startTime + stepTime);
  });
}

function hide(element) {
  element.style.transition = "visibility ".concat(stepTime / 1000, "s, opacity ").concat(stepTime / 1000, "s linear");
  element.style.visibility = 'hidden';
  element.style.opacity = 0;
}

function show(element) {
  element.style.transition = "visibility 0s, opacity ".concat(stepTime / 1000, "s linear");
  element.style.visibility = 'visible';
  element.style.opacity = 1;
}

function navGoTo(index) {
  return new Promise(function (resolve, reject) {
    //handle fast click
    if (index < 0) {
      index = 0;
    } else if (index > sectionsName.length - 1) {
      index = sectionsName.length - 1;
    }

    sectionsIndex = index; //Normal way

    switch (index) {
      case 0:
        hide(titleMenuArrowUp);
        titleMenu.classList.replace('title_menu--w25', 'title_menu--w50');
        mainContent.classList.replace('main_content--w75', 'main_content--w50');
        titleMenuContent.classList.replace('title_menu__nav', 'title_menu__content');
        break;

      case sectionsName.length - 1:
        hide(titleMenuArrowDown);
        break;

      default:
        show(titleMenuArrowUp);
        show(titleMenuArrowDown);
        titleMenu.classList.replace('title_menu--w50', 'title_menu--w25');
        titleMenuContent.classList.replace('title_menu__content', 'title_menu__nav');
        mainContent.classList.replace('main_content--w50', 'main_content--w75');
        break;
    }

    setTimeout(function () {
      resolve();
    }, 300);
  });
}

function changeContent(element, content) {
  element.textContent = content;
}

function getView(viewName) {
  var pathView = 'view/' + viewName.toLowerCase() + '.php';
  fetch(pathView).then(function (response) {
    return response.text();
  }).then(function (content) {
    article.innerHTML = content;
  });
}