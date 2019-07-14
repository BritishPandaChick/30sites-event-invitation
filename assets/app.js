$(document).ready(function(){
  //Variables
  var modal = document.getElementById("myModal");
  var rsvpButton = document.getElementById("rsvpButton");
  var close = document.getElementsByClassName("close")[0];

  //User clicks on button and opens modal
  rsvpButton.onclick = function() {
    modal.style.display = "block";
  }

  //User clicks on x and closes modal
  close.onclick = function() {
    modal.style.display = "none";
  }

  //User clicks anywhere outside modal, closes it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
