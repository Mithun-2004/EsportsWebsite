const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));

/* Swiper for council members */
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// back to top  
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });


// Navbar when scrolling

// const blurHeader = () => {
//   const header = document.querySelector('#header');
//   this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
// }

// window.onscroll = blurHeader();

// let navbar = document.querySelector('.nav');
const header = document.querySelector('#header');
window.onscroll = function(){
  if (document.documentElement.scrollTop > 20){
    header.classList.add('blur-header');
  }else{
    header.classList.remove('blur-header');
  }
}
  