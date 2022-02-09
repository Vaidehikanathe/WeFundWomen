console.log("This is my news js file");

//Initialize the news api parameters
source = 'bbc-news';
let apiKey = '49fff46e60e44d59b566d82d23800d5b'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
       let json = JSON.parse(this.responseText);
       let articles = json.articles;
       console.log(articles);
       let newsHtml = "";
       articles.forEach(function(element) {
           console.log(articles[news]);
           let news = `<div class="card">
<div class="card-header" id="heading${news}">
    <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${news}"
            aria-expanded="true" aria-controls="collapse${news}">
            ${element["title"]}
        </button>
    </h5>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#newsaccordion">
    <div class="card-body"> ${element["content"]}. <a href="${element['url']}">Read more here </a> </div>
</div>
</div>`
newsHtml += news;
});
       newsAccordion.innerHtml = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()