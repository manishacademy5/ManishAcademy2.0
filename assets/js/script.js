'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length)
     {
        slideIndex = 1;
    }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2600); // Change image every 3 seconds
}


const texts = ["Basic Computer","C & C++","Ms Excel" ,"Java", "Javascript" , "Photoshop", "Python" ,"SQL", "Tally Prime" ,  "HTML & CSS","PowerPoint" , "Windows 11" ,"Typing Master" ];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const delay = 1000; // delay before starting to erase
const typingSpeed = 20; // speed of typing in milliseconds
const erasingSpeed = 30; // speed of erasing in milliseconds

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(deleteText, delay); // Wait for a moment before starting to erase
    } else {
        setTimeout(type, typingSpeed);
    }
}

function deleteText() {
    let text = currentText;
    let length = text.length;

    function erase() {
        if (length >= 0) {
            document.getElementById("typed-text").textContent = text.slice(0, length);
            length--;
            setTimeout(erase, erasingSpeed);
        } else {
            type();
        }
    }
    erase();
}

type();

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
      for (let i = 0; i < revealElements.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = revealElements[i].getBoundingClientRect().top;
          const elementVisible = 200; // Adjust this value for when the reveal should happen

          if (elementTop < windowHeight - elementVisible) {
              revealElements[i].classList.add('active');
          } else {
              revealElements[i].classList.remove('active');
          }
      }
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Call the function to reveal elements already in view on page load
});
