function showText(event, modalId) {
  event.preventDefault();
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");
}

// Optional: close modal when clicking outside
window.onclick = function (event) {
   const modals = document.getElementsByClassName("modal"); 
   for (let i = 0; i < modals.length; i++) 
    { if (event.target === modals[i]) {
       modals[i].classList.remove("show"); 
      } 
    } 
}
