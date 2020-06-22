
/*** 
 * `quotes` array 
***/
const quotes = [
    {
      quote: 'one',
      source: 'one',
      citation: 'book',
      year: '2020'
    },
    {
      quote: 'two',
      source: 'two',
      citation: 'movie',
      year: '2019'
    },
    {
      quote: 'three',
      source: 'three',
      citation: 'actor',
      year: '2018'
    },
    {
      quote: 'four',
      source: 'four',
      citation: 'polititian',
      year: '2017'
    },
    {
      quote: 'five',
      source: 'five',
      citation: 'mom',
      year: '2016'
    }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/
  function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
     return quotes[randomNumber];
  }
console.log(getRandomQuote());

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);