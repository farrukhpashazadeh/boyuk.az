"use strict";

const navbarTopMenu = document.getElementById("navbar-top__menu");
const navbarBottom = document.getElementById("navbar-bottom");
const navbarToggler = document.getElementById("navbar-toggler");
const navbarTopMenuList = document.getElementById("navbar-top__menu__list");
const heartIcons = document.querySelectorAll('div.heart-icon > i');


heartIcons.forEach(h => {
  h.addEventListener('click', e => {
    e.preventDefault();
    if(h.classList.value === 'fas fa-heart') {
      h.classList.value = 'far fa-heart'
      h.style.color = 'white';
  
    } else {
      h.classList.value = 'fas fa-heart'
      h.style.color = 'rgb(225, 25, 25)';
    }
    }
    )
})





document.addEventListener("scroll", () => {
  if (pageYOffset > 300) {
    navbarBottom.style.bottom = 0;
  } else {
    navbarBottom.style.bottom = "-70" + "px";
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbarBottom.style.bottom = "-70" + "px";
  } else {
    navbarBottom.style.bottom = 0;
  }
  prevScrollpos = currentScrollPos;
};

navbarToggler.addEventListener('click', () => {
    navbarTopMenu.style.left = 0;
    navbarBottom.style.opacity = 0;
})

navbarTopMenu.addEventListener('click', () => {
  navbarTopMenu.style.left = '-100%';
  navbarBottom.style.opacity = 1;
})
