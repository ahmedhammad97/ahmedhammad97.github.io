const body = document.body;
const placeHolder = document.querySelector("#quote");
const author = document.querySelector("#author");
const another = document.querySelector("#another");
const random = document.querySelector("#random");

var partNumber = Math.floor(Math.random() * 7335) + 1;

let scriptTag = document.createElement('script');
scriptTag.src = "./quotes/part-" + partNumber + ".js";
scriptTag.id = "quoteScript";
body.appendChild(scriptTag)

var currQuoteNumber = 0;

document.querySelector("#quoteScript").addEventListener('load', ()=> {
  let quoteArray = window[`quotes${partNumber}`];
  currQuoteNumber = Math.floor(Math.random() * quoteArray.length);
  placeHolder.innerText = '\"' + quoteArray[currQuoteNumber] + '\"';
  author.innerText = window[`author${partNumber}`]

  setTimeout(()=> {
    if (window[`quotes${partNumber}`].length > 1) another.style.display = "block";
    setTimeout(()=> { random.style.display = "block"; }, 500)
  }, 3000)
})

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
