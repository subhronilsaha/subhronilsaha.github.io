gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl
.from('.hero-sect-bg-1-3rd', {x: -500, opacity: 0, duration: 1.5})
.from('.hero-section-main-row-col-1', {opacity: 0, duration: 1})
.from('.hero-section-main-row-col-2', {opacity: 0, duration: 1})
