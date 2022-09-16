var randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6 range.

var imageSource1 = "images/dice" + randomNum1 + ".png";
var image1 = document.querySelectorAll("img")[0]; //boths images ajayengi

image1.setAttribute("src", imageSource1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a tie!";
}
