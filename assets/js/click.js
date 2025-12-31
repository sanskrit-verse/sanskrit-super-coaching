function showText(event, modalId) {
  event.preventDefault();
  const modal = document.getElementById(modalId);

  modal.classList.add("show");

  history.pushState({ modalOpen: modalId }, "", "#" + modalId);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");


  if (history.state && history.state.modalOpen === modalId) {
    history.back();
  }
}


window.addEventListener("popstate", function(event) {
  if (event.state && event.state.modalOpen) {

    const modal = document.getElementById(event.state.modalOpen);
    if (modal) {
      modal.classList.remove("show");
    }
  }
});

window.addEventListener("click", function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      const modalId = modals[i].id;
      closeModal(modalId);
    }
  }
});
