gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl
.from('.hero-sect-bg-1-3rd', {x: -500, opacity: 0, duration: 1.5})
.from('.hero-section-main-row-col-1', {opacity: 0, duration: 1})
.from('.hero-section-main-row-col-2', {opacity: 0, duration: 0.5})
.from('.navbar-container', {y: -100, duration: 1})

// >>>>> MARK: Featured section scroll animation
let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".featured-section-content-container",
      start: "top center", 
      end: "bottom bottom",
    //   markers: true
    }
});
tl1
.from('.featured-section-content-main-row-1', { opacity: 0, duration: 1 })
.from('.featured-section-content-main-row-2', { opacity: 0, duration: 2 })

// >>>>> MARK: About section scroll animation
let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me-section-container",
      start: "top center", 
      end: "bottom bottom",
    //   markers: true
    }
});
tl2
.from('.about-me-bg-div', { x: 1000, duration: 1 })
.from('.about-me-section-content-main-row-1', { opacity: 0, duration: 1 })
.from('.about-me-section-content-main-row-2-col', { opacity: 0, duration: 1 })
