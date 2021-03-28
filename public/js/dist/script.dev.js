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
var scrollInterval = 1300;
var scrollAllowed = true;
document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  return regeneratorRuntime.async(function init$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(welcomeAnimation());

        case 2:
          getView(sectionsFile[sectionsIndex]);
          titleMenuArrowDown.addEventListener('click', function _callee() {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    sectionsIndex++;
                    changePage(sectionsIndex);

                  case 2:
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
                    changePage(sectionsIndex);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });
          section.querySelectorAll('a').forEach(function (element) {
            if (sectionsFile.indexOf(element.target) >= 0) {
              element.addEventListener('click', function _callee3(e) {
                return regeneratorRuntime.async(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        e.preventDefault();
                        sectionsIndex = sectionsFile.indexOf(e.target.target);
                        changePage(sectionsIndex);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              });
            }
          });
          section.addEventListener('mousewheel', scrollHandeler);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function changePage() {
  return regeneratorRuntime.async(function changePage$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(navGoTo(sectionsIndex));

        case 2:
          getView(sectionsFile[sectionsIndex]);
          changeContent(titleMenuContent, sectionsName[sectionsIndex]);

        case 4:
        case "end":
          return _context5.stop();
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
    hide(titleMenuContent); //handle fast click

    if (index < 0) {
      index = 0;
    } else if (index > sectionsName.length - 1) {
      index = sectionsName.length - 1;
    }

    sectionsIndex = index;
    boldAhref(sectionsIndex); //Normal way

    setTimeout(function () {
      switch (index) {
        case 0:
          transforMenu('big');
          hide(titleMenuArrowUp);
          break;

        case sectionsName.length - 1:
          transforMenu('small');
          show(titleMenuArrowUp);
          hide(titleMenuArrowDown);
          break;

        default:
          transforMenu('small');
          show(titleMenuArrowUp);
          show(titleMenuArrowDown);
          break;
      }
    }, stepTime);
    setTimeout(function () {
      show(titleMenuContent);
      resolve();
    }, stepTime * 2);
  });
}

function transforMenu() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'small';

  switch (size) {
    case 'small':
      titleMenu.classList.replace('title_menu--w50', 'title_menu--w25');
      titleMenuContent.classList.replace('title_menu__content', 'title_menu__nav');
      mainContent.classList.replace('main_content--w50', 'main_content--w75');
      break;

    default:
      titleMenu.classList.replace('title_menu--w25', 'title_menu--w50');
      mainContent.classList.replace('main_content--w75', 'main_content--w50');
      titleMenuContent.classList.replace('title_menu__nav', 'title_menu__content');
      break;
  }
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

function boldAhref(index) {
  document.querySelectorAll('a').forEach(function (element) {
    element.classList.remove('selected');

    if ((element.target == sectionsFile[index]) > 0) {
      element.classList.add('selected');
    }
  });
}

function scrollHandeler(e) {
  if (!scrollAllowed) {
    return;
  }

  scrollAllowed = false;

  if (e.deltaY > 0) {
    sectionsIndex++;
  } else {
    sectionsIndex--;
  }

  changePage(sectionsIndex);
  setTimeout(function () {
    scrollAllowed = true;
  }, scrollInterval);
}