"use strict";

var section = document.querySelector('.section');
var titleMenu = document.querySelector('.title_menu');
var titleMenuContent = document.querySelector('.title_menu__content');
var mainContent = document.querySelector('.main_content'); // Welcome animation timing

var startTime = 1000;
var stepTime = 500;
document.addEventListener('DOMContentLoaded', function () {
  welcomeAnimation();
});

function welcomeAnimation() {
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
}