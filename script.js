// Declaration 

var quote = document.getElementById('quote');
var author = document.getElementById('author');
var new_button = document.getElementById('new-quote');
var quote_container = document.getElementById('quote-container');
var loadingData = document.getElementById('loading');
var twitter = document.getElementById('twitter');
var random = 0;
var i = 0;


// var data = [{
//     quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
//     author: 'Thomas Edison'
// },
// {
//     quote: 'A house divided against itself cannot stand.',
//     author: 'Abraham Lincoln',
// },
// {
//     quote: 'Difficulties increase the nearer we get to the goal.',
//     author: 'Johann Wolfgang von Goethe'
// },
// {
//     quote: "A beautiful thing is never perfect.",
//     author: "Anonymous",

// },
// {
//     quote: "Every new day is another chance to change your life.",
//     author: "Anonymous",

// },
// {
//     quote: "Some pursue happiness, others create it.",
//     author: "Anonymous",

// },
// {
//     quote: "The harder you fall, the higher you bounce.",
//     author: "Anonymous",

// }];

var data = [];

async function getData(){
    // loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    var response =  await fetch(apiUrl);
   data = await response.json();
   quote_function();
//    removeLoader();
}

// function loading(){
//     loadingData.hidden = false;
//     quote_container.hidden = true;
  


// }
// function removeLoader(){
//     quote_container.hidden = false;
//     loadingData.hidden = true;

// }





// functionality

// var quote_function = () => {
//     console.log('Button Clicked', data);
//     random = i++; 8
//     if (i > data.length) {
//         i = 0;
//         random = i;
//     }
//     console.log(i)
//     quote.innerHTML = data[random].quote;
//     author.innerHTML = data[random].author;
// }

var quote_function = () => {
    console.log('Button Clicked', data);
    random = Math.floor(Math.random() * data.length)
    quote.innerHTML = data[random].text;
    author.innerHTML = data[random].author;
}

function tweetQuote(){
    const twiiterUrl = `https://twitter.com/intent/tweet?text=${quote.innerHTML}`;
    window.open(twiiterUrl,'_blank')
}

twitter.addEventListener('click', tweetQuote)

new_button.addEventListener('click', quote_function);

getData();










