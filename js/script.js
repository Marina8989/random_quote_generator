
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
      
    }
];


/***
 * `getRandomQuote` function
***/
  function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
     return quotes[randomNumber];
  }


/***
 * `printQuote` function
***/
  function printQuote() {
    let printQ = getRandomQuote();
    let htmlString = 
    `<p class='quote'>${printQ.quote}</p>
     <p class='source'>${printQ.source}
    
      if(typeof ${printQ.citation} != 'undefined') {
        <span class='citation'>${printQ.citation}</span>
      }
    

    </p >`;
    return document.getElementById('quote-box').innerHTML = htmlString; 
   
  }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);