/* Variables */
var modal = document.querySelector(".modal");
var rsvpButton = document.querySelector(".rsvp");
var closeButton = document.querySelector(".close");

/* Toggle Modal */
function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

rsvpButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
