"use strict";

// DOM element
var section = document.querySelector('.section');
var titleMenu = document.querySelector('.title_menu');
var titleMenuContent = document.querySelector('.title_menu__content');
var titleMenuArrowDown = document.querySelector('.title_menu__arrow--down');
var titleMenuArrowUp = document.querySelector('.title_menu__arrow--up');
var mainContent = document.querySelector('.main_content'); // Configuration variable

var sections = ['welcome', 'about', 'portfolio', 'contact'];
var sectionsIndex = 0; // Welcome animation timing

var startTime = 1000;
var stepTime = 500;
document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(welcomeAnimation());

        case 2:
          titleMenuArrowDown.addEventListener('click', function () {
            sectionsIndex++;
            navGoTo(sectionsIndex);
          });
          titleMenuArrowUp.addEventListener('click', function () {
            sectionsIndex--;
            navGoTo(sectionsIndex);
          });

        case 4:
        case "end":
          return _context.stop();
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
  switch (index) {
    case 0:
      hide(titleMenuArrowUp);
      break;

    case sections.length - 1:
      hide(titleMenuArrowDown);
      break;

    default:
      show(titleMenuArrowUp);
      show(titleMenuArrowDown);
      break;
  }
}