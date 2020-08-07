var tl = gsap.timeline();

tl.from('.hero', 1, {y: 100, opacity: 0});
tl.staggerFrom('.social-icon', 1, {y: 100, opacity: 0}, 0.2);