const spinner = document.getElementById("navPic");
const images = document.querySelectorAll(".navPicCarasoul");
let currentImage = 0;

function flipNextImage() {
  const current = images[currentImage];
  current.style.transform = "rotateY(180deg)";

  currentImage = (currentImage + 1) % images.length;

  const next = images[currentImage];
  next.style.transform = "rotateY(0deg)";
}

// Set an interval to automatically flip to the next image
setInterval(flipNextImage, 3000);

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

// Open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when clicking the close button
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Prevent clicks inside the modal from closing it
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
