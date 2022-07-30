function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
function closeimg() {
  document.getElementById("myModal").style.display = "none";
}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function sent(src) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = src;
}
