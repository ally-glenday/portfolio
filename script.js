import { Gradient } from './Gradient.js'
 
// Create your instance
const gradient = new Gradient()
 
// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navBar = document.querySelector(".nav-bar");
// const header = document.querySelector(".header-container");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     navBar.classList.toggle("active");
//     header.classList.toggle("active");
    
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }));

/* ------ GSAP ------ */ 

window.addEventListener("load", async () => {
    const track = document.querySelector(".name-track");
  
    await document.fonts.ready;
  
    track.innerHTML += track.innerHTML;
  
    const width = track.scrollWidth / 2;
  
    let direction = -1; // default: move left
  
    const tween = gsap.to(track, {
      x: "-=" + width,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % width)
      }
    });
  
    // detect scroll direction
    let lastScroll = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
  
      if (currentScroll > lastScroll) {
        direction = -1; // scrolling down → move left
      } else {
        direction = 1; // scrolling up → move right
      }
  
      gsap.to(tween, {
        timeScale: direction,
        duration: 0.3
      });
  
      lastScroll = currentScroll;
    });
  });

// window.addEventListener("load", async () => {
//     const track = document.querySelector(".name-track");
  
//     // 🧠 wait for fonts to load (THIS is the missing piece)
//     await document.fonts.ready;
  
//     // duplicate content once
//     track.innerHTML += track.innerHTML;
  
//     const width = track.scrollWidth / 2;
  
//     gsap.set(track, { x: 0 });
  
//     gsap.to(track, {
//       x: "-=" + width,
//       duration: 40,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize(x => parseFloat(x) % width)
//       }
//     });
//   });

/* ------ GSAP ------ */ 
 


