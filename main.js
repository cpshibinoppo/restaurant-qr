function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    console.log("off");
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
// img.onclick = function click(){
//     console.log("imgon");
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
function sent(){
    console.log("addimg");
    document.getElementById('myModal').style.display='block';
    document.getElementById("img01").src = document.getElementById("myImg").src;
    console.log(document.getElementById("myImg").src)
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function closeimg() { 
  document.getElementById('myModal').style.display='none';
}