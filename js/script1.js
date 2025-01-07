// Select all carousel images
const images = document.querySelectorAll('.carousel-images img');

// Initialize the current index to the second image (center image)
let currentIndex = 1; // Center image as the initial active image

/**
 * Updates the carousel classes to reflect the current image positions.
 * Assigns 'prev', 'active', and 'next' classes to the images based on the current index.
 */
function updateCarousel() {
  // Remove all existing classes from images
  images.forEach((img) => {
    img.classList.remove('prev', 'active', 'next');
  });

  // Calculate the previous and next image indexes
  const prevIndex = (currentIndex - 1 + images.length) % images.length; // Wraps around to the last image
  const nextIndex = (currentIndex + 1) % images.length; // Wraps around to the first image

  // Assign the respective classes to images
  images[prevIndex].classList.add('prev'); // Previous image
  images[currentIndex].classList.add('active'); // Active (centered) image
  images[nextIndex].classList.add('next'); // Next image
}

// Initialize the carousel with the default active image
updateCarousel();

// Event listener for "Previous" button click
document.getElementById('prev').addEventListener('click', () => {
  // Move to the previous image in the carousel
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Wraps to the last image if at the first
  updateCarousel();
});

// Event listener for "Next" button click
document.getElementById('next').addEventListener('click', () => {
  // Move to the next image in the carousel
  currentIndex = (currentIndex + 1) % images.length; // Wraps to the first image if at the last
  updateCarousel();
});
