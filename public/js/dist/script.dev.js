"use strict";

var section = document.querySelector('.section');
var titleMenu = document.querySelector('.title_menu');
var titleMenuContent = document.querySelector('.title_menu__content');
document.addEventListener('DOMContentLoaded', function () {
  welcomeAnimation();
});

function welcomeAnimation() {
  setTimeout(function () {
    titleMenuContent.classList.add('title_menu__content--vertical');
  }, 1000);
  setTimeout(function () {
    section.classList.replace('section', 'section--m5vh');
  }, 1500);
  setTimeout(function () {
    titleMenu.classList.add('title_menu--w50');
  }, 2000);
}