const body = document.body;
const placeHolder = document.querySelector("#quote");
const author = document.querySelector("#author");
const another = document.querySelector("#another");
const random = document.querySelector("#random");

var partNumber = Math.floor(Math.random() * 999) + 1;

let scriptTag = document.createElement('script');
scriptTag.src = "./quotes/part-" + partNumber + ".js";
body.appendChild(scriptTag)

var currQuoteNumber = 0;

setTimeout(()=> {
  let quoteArray = window[`quotes${partNumber}`];
  currQuoteNumber = Math.floor(Math.random() * quoteArray.length);
  placeHolder.innerText = '\"' + quoteArray[currQuoteNumber] + '\"';
  author.innerText = window[`author${partNumber}`]
}, 100)

setTimeout(()=> {
  if (window[`quotes${partNumber}`].length > 1) another.style.display = "block";
  setTimeout(()=> { random.style.display = "block"; }, 500)
}, 3000)

another.addEventListener('click', e => {
  let quoteArray = window[`quotes${partNumber}`];
  let randNumber = currQuoteNumber;
  while (randNumber === currQuoteNumber) {
    randNumber = Math.floor(Math.random() * quoteArray.length);
  }
  currQuoteNumber = randNumber;
  placeHolder.innerText = '\"' + quoteArray[currQuoteNumber] + '\"';
  author.innerText = window[`author${partNumber}`]
})

random.addEventListener('click', e => {
  location.reload();
})
