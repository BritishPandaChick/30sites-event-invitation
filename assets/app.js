//Variables
var modal = document.getElementById("#myModal");
var btn = document.getElementById("#rsvp");
var close = document.getElementsByClassName(".close")[0];

//User clicks on button and opens modal
btn.onclick = function() {
  modal.style.display = "block";
}

//User clicks on x and closes modal
close.onclick = function() {
  modal.style.display = "none";
}
