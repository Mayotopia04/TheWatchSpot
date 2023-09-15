(() => {
    const refsMenu = {
      openModalBtn: document.querySelector("[burger-modal-open]"),
      closeModalBtn: document.querySelector("[burger-modal-close]"),
      navModalBtn: document.querySelector("[hamburger-nav-close]"),
      modal: document.querySelector("[burger-modal]"),
    };
  
    refsMenu.openModalBtn.addEventListener("click", toggleModal);
    refsMenu.closeModalBtn.addEventListener("click", toggleModal);
    refsMenu.navModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refsMenu.modal.classList.toggle("is-hidden");
    }
  })();
