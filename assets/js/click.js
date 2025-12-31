
(function initHistoryBaseline() {
  if (!history.state || !history.state.baseline) {
    history.replaceState({ baseline: true }, document.title, location.href);
  }
})();

function showText(event, modalId) {
  if (event) event.preventDefault();
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.add("show");
  history.pushState({ modalOpen: modalId }, "", "#" + modalId);
}


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("show");

  if (history.state && history.state.modalOpen === modalId) {
    history.back();
  }
}

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.modalOpen) {
    const modal = document.getElementById(event.state.modalOpen);
    if (modal) modal.classList.remove("show");
    return;
  }
});

document.addEventListener("click", function (e) {
  const modal = e.target.classList && e.target.classList.contains("modal") ? e.target : null;
  if (!modal) return;

  const modalId = modal.id;
  closeModal(modalId);
});

document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  const openModals = document.querySelectorAll(".modal.show");
  openModals.forEach((m) => closeModal(m.id));
});
