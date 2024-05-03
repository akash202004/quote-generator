const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, "tweet Window", "width=500, height=400");
}

getQuote(api_url);