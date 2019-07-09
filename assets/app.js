/* Modal */
var modal = document.getElementById('#rsvpModal');
var rsvp = document.getElementById('#rsvp');
var close = document.getElementByClassName('.close')[0];

/* User Clicks button and opens modal */
rsvp.onclick = function() {
  modal.style.display = "block";
}

/* User clicks on X span and closes modal */
close.onclick = function() {
  modal.style.display = "none";
}
