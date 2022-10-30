// Featured posts Carousel
let featuredLeftBtn = document.getElementById('featured-btn-left');
let featuredRightBtn = document.getElementById('featured-btn-right');
let featuredCarousel = document.getElementsByClassName('featured-section-carousel-container')[0];

featuredRightBtn.addEventListener('click', () => {
    let scrollOffset = featuredCarousel.scrollLeft;
    console.log("SCROLLING::::", scrollOffset);
    featuredCarousel.scrollLeft += 600;
})

featuredLeftBtn.addEventListener('click', () => {
    let scrollOffset = featuredCarousel.scrollLeft;
    console.log("SCROLLING::::", scrollOffset);
    featuredCarousel.scrollLeft -= 600;
})

// Blog posts Carousel
let blogsLeftBtn = document.getElementById('blogs-btn-left');
let blogsRightBtn = document.getElementById('blogs-btn-right');
let blogsCarousel = document.getElementsByClassName('blogs-section-carousel-container')[0];

blogsRightBtn.addEventListener('click', () => {
    let scrollOffset = blogsCarousel.scrollLeft;
    console.log("SCROLLING::::", scrollOffset);
    blogsCarousel.scrollLeft += 600;
})

blogsLeftBtn.addEventListener('click', () => {
    let scrollOffset = blogsCarousel.scrollLeft;
    console.log("SCROLLING::::", scrollOffset);
    blogsCarousel.scrollLeft -= 600;
})
