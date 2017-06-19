// //creating an article with a class 'quote'
//   var quoteArticle = document.createElement("article");
//   quoteArticle.classList.add("quote");
// //creating a block quote with inner text
//   var blockQuote = document.createElement("blockquote");
//   blockQuote.innerText = "Why not dogs? Why can't dogs come? ";
//   //console.log(blockQuote)
// //creating a cite with text inside it
//   var cite = document.createElement("cite");
//   cite.innerText = "Craig Morton";
// //put the cite in the block quote
//   blockQuote.appendChild(cite);
// //put the block quote in the article
//   quoteArticle.appendChild(blockQuote);
// //getting the target element (the existing list of quotes)
//   var quoteList = document.querySelector("#quotes");
// //putting the full article tag in the list of quotes
//   quoteList.appendChild(quoteArticle);

var app = function() {

  var listObject = document.createElement("ul");
  listObject.classList.add("cat");

  var listElement1 = document.createElement("li");
  listElement1.innerText = "Name: I Hate CAts";

  var listElement2 = document.createElement("li");
  listElement2.innerText = "Favourite Food: naps";

  var listImage = document.createElement("li");
  listImage.innerText = "https://images-production.global.ssl.fastly.net/uploads/posts/image/47360/grumpy-cat.jpg"

  listObject.appendChild(listElement1);
  listObject.appendChild(listElement2);
  listObject.appendChild(listImage);


  var catList = document.querySelector('#cats');
  console.log(listObject)
  catList.appendChild(listObject);
}



window.onload = app;


