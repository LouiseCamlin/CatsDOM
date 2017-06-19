//old rough and ready way -------
// var app = function() {

//   var listObject = document.createElement("ul");
//   listObject.classList.add("cat");

//   var listElement1 = document.createElement("li");
//   listElement1.innerText = "Name: I Hate Cts";

//   var listElement2 = document.createElement("li");
//   listElement2.innerText = "Favourite Food: naps";

//   var listImage = document.createElement("li");
//   listImage.innerText = "https://images-production.global.ssl.fastly.net/uploads/posts/image/47360/grumpy-cat.jpg"

//   listObject.appendChild(listElement1);
//   listObject.appendChild(listElement2);
//   listObject.appendChild(listImage);


//   var catList = document.querySelector('#cats');
//   console.log(listObject)
//   catList.appendChild(listObject);
// }



// window.onload = app;

// new refactored way------

var addCat = function(catName, faveFood, imgUrl) {
  var list = createList();
  var listCatName = createCatName(catName);
  var listCatFood = createCatFood(faveFood);
  var listImg = createCatImg(imgUrl);

  var cats = document.querySelector("#cats");
  appendElements(cats, list, listCatName, listCatFood, listImg);
}


var createList = function() {
  var list = document.createElement("ul");
  list.classList.add("cat");
  return list;
}

var createCatName = function(name) {
  var listCatName = document.createElement("li");
  listCatName.innerText = "Name: " + name;
  return listCatName;
}

var createCatFood = function(food) {
  var listCatFood = document.createElement("li");
  listCatFood.innerText = "Favourite Food: " + food;
  return listCatFood;
}



var createCatImg = function(imgUrl) {
  var listImg = document.createElement("li");
  var catImg = document.createElement("img")
  catImg.setAttribute("src", imgUrl);
  catImg.setAttribute("width", "500");
  listImg.appendChild(catImg);
  return listImg;
}



var appendElements = function(cats, list, listCatName, listCatFood, listImg){
  list.appendChild(listCatName);
  list.appendChild(listCatFood);
  list.appendChild(listImg);
  cats.appendChild(list);

}

var app = function() {
  addCat("Alex","Salmon", "https://images-production.global.ssl.fastly.net/uploads/posts/image/47360/grumpy-cat.jpg")
};

window.onload = app;

