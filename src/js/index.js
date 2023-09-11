(() => {
  const refs = {
    openModalBtn: document.querySelector('[burger-modal-open]'),
    closeModalBtn: document.querySelector('[burger-modal-close]'),
    modal: document.querySelector('[burger-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
