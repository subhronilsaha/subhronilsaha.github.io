var tl = gsap.timeline();

tl.from('nav', 0.7, {y: 100, opacity: 0});
tl.staggerFrom('.link-holder ul li', 0.7, {y: 100, opacity: 0}, 0.2);
tl.from('.toggle-switch', 0.7, {y: 100, opacity: 0});
tl.from('.hero', 1, {y: 100, opacity: 0});
tl.staggerFrom('.social-icon', 1, {y: 100, opacity: 0}, 0.2);