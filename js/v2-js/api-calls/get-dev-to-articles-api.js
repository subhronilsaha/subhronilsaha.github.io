class GetDevArticlesData {
    constructor(resp) {
        this.resp = resp;
    }
}

async function getDevToArticles() {
    const url = "https://dev.to/api/articles?username=subhronilsaha&state=all"
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    
    // do something with myJson
    return myJson
}

function setBlogList(resp) {
    const blogsContainer = document.getElementById('blogs-section-carousel-content-container');
    const len = resp.length;
    console.log("TOTAL API RESPONSES:", len);

    var allCardsHTML = "";

    blogURLS = [];

    for(var i=0; i<len; i++) {
        const respTitle = resp[i].title;
        const respDesc = resp[i].description;
        const url = resp[i].url;
        const positive_reactions_count = resp[i].positive_reactions_count;
        const comments_count = resp[i].comments_count;
        const cover_image = resp[i].cover_image;
        const social_image = resp[i].social_image;
        const readable_publish_date = resp[i].readable_publish_date;
        const reading_time_minutes = resp[i].reading_time_minutes;
        const tag_list = resp[i].tag_list;
        const username = resp[i].user.username;
        const profile_image = resp[i].user.profile_image;

        blogURLS.push(url);

        var tagsHTML = "";
        for(var j=0; j<tag_list.length; j++) {
            tagsHTML += `<li>${tag_list[j]}</li>`;
        }

        const cardHTML = `<button onclick="didClickBlogPost(this.id)" id="blog-card-container-${i+1}" class="blog-card-container"><div class="blogs-section-carousel-card"><div class="blogs-section-carousel-card-content"><img class="blog-post-cover" src="${social_image}" alt=""><div class="blog-post-metadata"><h5 class="blog-post-title">${respTitle}</h5><p class="blog-post-desc">${respDesc}</p><div class="blog-post-user-details-stack"><span><img class="blog-post-pp" src="${profile_image}" alt=""><p class="blog-post-username">${username}</p></span><p class="blog-post-date">${readable_publish_date}</p></div><ul>${tagsHTML}</ul></div></div></div></button>`;

        allCardsHTML += cardHTML;
    }

    blogsContainer.innerHTML = allCardsHTML;
    
}

var blogURLS = [];

// Make API Call
getDevToArticles()
.then(resp => {
    // console.log("API Response:", resp);
    setBlogList(resp);
})

function didClickBlogPost(id) {
    const mySplit = id.split('-');
    console.log("Clicked blog #", mySplit);
    if (mySplit.length > 0) {
        const numStr = mySplit[mySplit.length-1];
        const num = parseInt(numStr);
        console.log("Clicked blog #", num, blogURLS);
        if (num-1 >= 0 && blogURLS.length > num-1) {
            let myUrl = blogURLS[num-1];
            window.open(myUrl);
        }
    }

}


