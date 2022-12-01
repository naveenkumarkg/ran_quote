
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var new_button = document.getElementById('new-quote');
var random = 0;
var i = 0;


var data = [{
    quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison'
},
{
    quote: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
},
{
    quote: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe'
},
{
    quote: "A beautiful thing is never perfect.",
    author: "Anonymous",

},
{
    quote: "Every new day is another chance to change your life.",
    author: "Anonymous",

},
{
    quote: "Some pursue happiness, others create it.",
    author: "Anonymous",

},
{
    quote: "The harder you fall, the higher you bounce.",
    author: "Anonymous",

}];

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
    quote.innerHTML = data[random].quote;
    author.innerHTML = data[random].author;
}

new_button.addEventListener('click', quote_function);
quote_function()


// function quote_function() {
//     console.log('Button Clicked');
//     quote.innerHTML = 'Hello';
//     author.innerHTML = 'Bye';
// }








