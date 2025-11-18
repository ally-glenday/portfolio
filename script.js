import { Gradient } from './Gradient.js'
 
// Create your instance
const gradient = new Gradient()
 
// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const header = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    header.classList.toggle("active");
    
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



