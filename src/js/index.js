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

// sale js
function displayImage(imageSrc) {
  var imageContainer = document.getElementById('imagecontainer');
  // Create a new image element
  var img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Selected Image';
  // Clear the contents of the image container
  imageContainer.innerHTML = '';
  // Append the selected image to the container
  imageContainer.appendChild(img);
}
