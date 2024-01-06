var tl1 = gsap.timeline();

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none none reset"
    }
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none none reset"
    }
});

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".resume",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none none reset"
    }
});

tl1.from('nav', 1, {y: 100, opacity: 0});

if(screen.width <= 768) {
    tl1.from('.hamburger', 1, {y: 100, opacity: 0})
} else {
    tl1.staggerFrom('.link-holder ul li', 0.7, {y: 100, opacity: 0}, 0.2);
}

tl1.from('.intro-text', 1, {y: 100, opacity: 0});
tl1.staggerFrom('.hero .social-icon', 1, {y: 100, opacity: 0}, 0.2);

tl2
.from(".about-left-column", {y: 100, opacity: 0, duration: 0.5})
.from(".about-right-column", {y: 100, opacity: 0, duration: 1}, "-=1");

tl3
.from(".projects h1", {y: 100, opacity: 0, duration: 0.5})
.from(".card", {opacity: 0, duration: 0.1})

tl4
.from(".resume h1", {y: 100, opacity: 0, duration: 0.5})
.from(".resume a", {opacity: 0, duration: 1})


