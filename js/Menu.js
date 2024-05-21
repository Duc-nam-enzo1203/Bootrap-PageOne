const images = document.querySelectorAll("img");

images.forEach((item) => item.addEventlistener("click", handleZoomImage));

function handleZoomImage(e) {
  console.log(e.target);
}
