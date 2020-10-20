var tl = gsap.timeline();
// var tween = gsap.tweenMax();

tl.from('nav', 1, {y: 100, opacity: 0});

if(screen.width <= 768) {
    tl.from('.hamburger', 1, {y: 100, opacity: 0})
} else {
    tl.staggerFrom('.link-holder ul li', 0.7, {y: 100, opacity: 0}, 0.2);
}

tl.from('.intro-text', 1, {y: 100, opacity: 0});
tl.staggerFrom('.social-icon', 1, {y: 100, opacity: 0}, 0.2);

tl.from('.about', 1, {y: 100, opacity: 0});

tl.from('#projects', 1, {y: 100, opacity: 0});


