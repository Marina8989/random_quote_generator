
/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Anything that is of value in life only multiplies when it is given.",
    source: "Deepak Chopra",
    citation: "Wikipedia",
    tags: "Motivation"
  },
  {
    quote: "Nothing will work unless you do.",
    source: "Maya Angelou",
    year: "1928-2014"
  },
  {
    quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    source: "George Bernhard Shaw",
    citation: "Twitter",
    year: "1856-1950",
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    source: "Leo Tolstoy",
    citation: "Russian Writer",
  },
  {
    quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    source: "Albert Eistein",
    year: '1879-1955',
    tags: "Education"
  },
];


/***
 * `getRandomQuote` function
***/
  function getRandomQuote(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
     return array[randomNumber];
  }
   
/***
 * `printQuote` function
***/
  function printQuote() {
    let printRandomQuote = getRandomQuote(quotes);
    
    let htmlString = 
    `
    <p class='quote'>${printRandomQuote.quote}</p>
    <p class='source'>${printRandomQuote.source}`
      if(printRandomQuote.hasOwnProperty('citation')) {
      htmlString+= `<span class='citation'>${printRandomQuote.citation}</span>`
      }
      if (printRandomQuote.hasOwnProperty('year')) {
        htmlString += `<span class='year'>${printRandomQuote.year}</span>`;
      }
      if (printRandomQuote.hasOwnProperty('tags')) {
        htmlString += `<span class='year'>${printRandomQuote.tags}</span>`;
      }
    `</p>
    `;

    return (document.getElementById("quote-box").innerHTML = htmlString);
  }

     let red;
     let blue;
     let green;

    function randomRGB() {
    
     red = randomColorGenerator();
     blue = randomColorGenerator();
     green = randomColorGenerator();

      document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
       
    function randomColorGenerator() {
       return Math.floor(Math.random() * 256);
    }

      
    setInterval(() => {
        printQuote();
        randomRGB();
    }, 3000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);