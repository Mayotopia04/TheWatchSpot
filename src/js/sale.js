function displayImage(imageSrc) {
  var imageContainer = document.getElementById("imagecontainer");
  // Create a new image element
  var img = document.createElement("img");
  img.classList = "sale-watch-preview";
  img.src = imageSrc;
  img.alt = "Selected Image";
  img.height = 350;
  img.width = 235;
  // Clear the contents of the image container
  imageContainer.innerHTML = "";
  // Append the selected image to the container
  imageContainer.appendChild(img);
}
