const puzzleElement = document.getElementsByClassName(
  "slider_container_box_content_puzzle"
)[0];

var contentArray = ["Buzzle", "Puzzle"];
var currentIndex = 0;

function changeContent() {
  puzzleElement.innerHTML = contentArray[currentIndex];
  currentIndex = (currentIndex + 1) % contentArray.length;
}

setInterval(changeContent, 2000);
