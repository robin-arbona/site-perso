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
var sectionsIndex = 0;
var projectId = 0; // Welcome animation timing

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
          document.querySelectorAll('a').forEach(function (element) {
            element.addEventListener('click', function (e) {
              e.preventDefault();
            });
          });
          _context4.next = 3;
          return regeneratorRuntime.awrap(welcomeAnimation());

        case 3:
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
          document.querySelectorAll('a').forEach(function (element) {
            if (sectionsFile.indexOf(element.target) >= 0) {
              element.addEventListener('click', function _callee3(e) {
                return regeneratorRuntime.async(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        sectionsIndex = sectionsFile.indexOf(e.target.target);
                        changePage(sectionsIndex);

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                });
              });
            }
          });
          section.addEventListener('wheel', scrollHandeler);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function initModal() {
  var modal = document.querySelector('.modal');
  var openModalBtn = document.querySelector('.site_preview__btn');
  hide(modal);
  openModalBtn.addEventListener('click', function () {
    show(modal);
  });
  document.querySelector(".modal__close_btn").addEventListener('click', function () {
    hide(modal);
  });
}

function changePage() {
  return regeneratorRuntime.async(function changePage$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Promise.all([hide(article), hide(titleMenuContent)]));

        case 2:
          _context5.next = 4;
          return regeneratorRuntime.awrap(navGoTo(sectionsIndex));

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap(getView(sectionsFile[sectionsIndex]));

        case 6:
          changeContent(titleMenuContent, sectionsName[sectionsIndex]);
          show(article);
          show(titleMenuContent);

          if (sectionsFile[sectionsIndex] == 'portfolio') {
            carrouselChangeProject(projectId);
            initCarrousel();
            initModal();
          }

          if (sectionsFile[sectionsIndex] == 'contact') {
            initContactForm();
          }

        case 11:
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
  return new Promise(function (resolve, reject) {
    element.style.transition = "visibility ".concat(stepTime / 2 / 1000, "s, opacity ").concat(stepTime / 2 / 1000, "s linear");
    element.style.visibility = 'hidden';
    element.style.opacity = 0;
    setTimeout(function () {
      resolve();
    }, stepTime / 2);
  });
}

function show(element) {
  element.style.transition = "visibility 0s, opacity ".concat(stepTime / 2 / 1000, "s linear");
  element.style.visibility = 'visible';
  element.style.opacity = 1;
}

function navGoTo(index) {
  return regeneratorRuntime.async(function navGoTo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          //handle fast click
          if (index < 0) {
            index = 0;
          } else if (index > sectionsName.length - 1) {
            index = sectionsName.length - 1;
          }

          sectionsIndex = index;
          boldAhref(sectionsIndex); //Normal way

          _context6.t0 = index;
          _context6.next = _context6.t0 === 0 ? 6 : _context6.t0 === sectionsName.length - 1 ? 10 : 14;
          break;

        case 6:
          _context6.next = 8;
          return regeneratorRuntime.awrap(hide(titleMenuArrowUp));

        case 8:
          transforMenu('big');
          return _context6.abrupt("break", 18);

        case 10:
          transforMenu('small');
          show(titleMenuArrowUp);
          hide(titleMenuArrowDown);
          return _context6.abrupt("break", 18);

        case 14:
          transforMenu('small');
          show(titleMenuArrowUp);
          show(titleMenuArrowDown);
          return _context6.abrupt("break", 18);

        case 18:
        case "end":
          return _context6.stop();
      }
    }
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
  return new Promise(function (resolve, reject) {
    var pathView = 'view/' + viewName.toLowerCase() + '.php';
    fetch(pathView).then(function (response) {
      return response.text();
    }).then(function (content) {
      article.innerHTML = content;
      resolve();
    })["catch"](function () {
      console.log('Ajax failed');
      reject();
    });
  });
}

function fetchJson($url) {
  return new Promise(function (resolve, reject) {
    fetch($url).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    }).then(function (content) {
      resolve(content);
    })["catch"](function (error) {
      reject(['Ajax failed', error]);
    });
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

function initCarrousel() {
  var pbtn = document.querySelector('.carrousel__previous-site');
  var nbtn = document.querySelector('.carrousel__next-site');
  var card = document.querySelector('.carrousel__content');
  card.classList.add('rotate');
  pbtn.addEventListener('click', function () {
    card.classList.add('rotate--m90');
    setTimeout(function () {
      projectId--;
      carrouselChangeProject(projectId);
      card.classList.remove('rotate--m90');
    }, stepTime);
  });
  nbtn.addEventListener('click', function () {
    card.classList.add('rotate--90');
    setTimeout(function () {
      projectId++;
      carrouselChangeProject(projectId);
      card.classList.remove('rotate--90');
    }, stepTime);
  });
}

function carrouselChangeProject(projectId) {
  var type, name, techno, video, projectNumber;
  return regeneratorRuntime.async(function carrouselChangeProject$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          type = document.querySelector('.carrousel .site-type');
          name = document.querySelector('.carrousel .site-name');
          techno = document.querySelector('.carrousel .site-techno'); //const url = document.querySelector('.carrousel .site-url')

          video = document.querySelector('.carrousel .site-video');
          projectNumber = 0;
          _context7.next = 7;
          return regeneratorRuntime.awrap(fetchJson("app/project/totalNumber").then(function (content) {
            projectNumber = Number(content.rows);
          })["catch"](function (err) {
            return console.log('No response', err);
          }));

        case 7:
          projectId = Math.abs(projectId) % projectNumber;
          fetchJson("app/project/getone/".concat(projectId + 1)).then(function (content) {
            type.textContent = content.type;
            name.textContent = content.name;
            techno.textContent = content.techno;
            video.setAttribute('src', "public/video/" + content.video);
          })["catch"](function (err) {
            return console.log('No response', err);
          });

        case 9:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function initContactForm() {
  document.querySelector('#submit').addEventListener('click', function (e) {
    e.preventDefault();
    handleForm();
  });
}

function handleForm() {
  var data = new FormData();
  document.querySelectorAll("form > .input").forEach(function (element) {
    data.append(element.getAttribute('name'), element.value);
  });
  console.log(data);
  postData('app/contact/new', data).then(function (data) {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

function postData() {
  var url,
      data,
      response,
      _args8 = arguments;
  return regeneratorRuntime.async(function postData$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          url = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : '';
          data = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
          _context8.next = 4;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'POST',
            // *GET, POST, PUT, DELETE, etc.
            body: data // body data type must match "Content-Type" header

          }));

        case 4:
          response = _context8.sent;
          return _context8.abrupt("return", response.json());

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
}