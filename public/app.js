
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


