// YOUR TASK: Add more pictures!
var pictures = ['./imgs/pic1.jpeg','./imgs/pic2.jpeg','./imgs/pic3.jpeg','./imgs/pic4.jpeg','./imgs/pic5.jpeg'];
var currentIndex = 0;
//var PicList = document.getElementByTagName("img");


function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
  	alert("hiiii");
   
});

  // YOUR TASK: Finish this function!
}
showNextPicture();