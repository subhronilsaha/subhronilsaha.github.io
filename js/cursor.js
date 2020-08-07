var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

var exploreProjectsBtn = document.getElementById('go-to-projects');

exploreProjectsBtn.addEventListener('mouseover', e => {
    cursor.style.height = "100px";
    cursor.style.width = "100px";
    document.style.cursor = "none";
})

exploreProjectsBtn.addEventListener('mouseout', e => {
    cursor.style.height = "50px";
    cursor.style.width = "50px";
})