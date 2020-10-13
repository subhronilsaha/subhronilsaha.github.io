var aboutButton1 = document.getElementById("about-btn-1");
var aboutButton2 = document.getElementById("about-btn-2");
var aboutButton3 = document.getElementById("about-btn-3");
var div1 = document.getElementById("div-1");
var div2 = document.getElementById("div-2");
var div3 = document.getElementById("div-3");

aboutButton1.addEventListener('click', () => {
    aboutButton1.classList.add('about-active');
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";

    if(aboutButton2.classList.contains('about-active')) {
        aboutButton2.classList.remove('about-active');
    }

    if(aboutButton3.classList.contains('about-active')) {
        aboutButton3.classList.remove('about-active');
    }
})

aboutButton2.addEventListener('click', () => {
    aboutButton2.classList.add('about-active');
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
    
    if(aboutButton1.classList.contains('about-active')) {
        aboutButton1.classList.remove('about-active');
    }

    if(aboutButton3.classList.contains('about-active')) {
        aboutButton3.classList.remove('about-active');
    }
})

aboutButton3.addEventListener('click', () => {
    aboutButton3.classList.add('about-active');
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    
    if(aboutButton1.classList.contains('about-active')) {
        aboutButton1.classList.remove('about-active');
    }

    if(aboutButton2.classList.contains('about-active')) {
        aboutButton2.classList.remove('about-active');
    }
})