function displayImage(imageSrc) {
  const imageContainer = document.getElementById('imagecontainer');
  const imageElements = document.querySelectorAll('.sale-watch-preview');
  // const imageSelected = document.querySelector(`.imageselected-${imageSrc}`);
  
  // const imageActive = document.querySelector('.activeimage');



  // Create a new image element
  imageElements.forEach(element => {
    element.classList.remove('activeimage');
  });
  imageElements[imageSrc].classList.add('activeimage');


  // imageActive.classList.remove('activeimage');
  // imageSelected.classList.toggle('activeimage');
  
  
  // Clear the contents of the image container
  
  // Append the selected image to the container
  
}
