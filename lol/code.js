// Image elements
const images = document.querySelectorAll(".scrolling-image");

// Array of image paths to cycle through for the animation effect
const imagePaths = ["layer1.png", "layer2.png"]; // Add more as needed

// Indexes to track current image for each scrolling image element
let imageIndex1 = 0;
let imageIndex2 = 1;

// Function to switch images
function switchImages() {
  // Update the src of each image element
  images[0].src = imagePaths[imageIndex1];
  images[1].src = imagePaths[imageIndex1];

  // Update the indexes for the next switch
  imageIndex1 = (imageIndex1 + 1) % imagePaths.length;
}

// Start the image switch interval (every 0.5 seconds)
setInterval(switchImages, 500);


// Event listeners for start and stop keybindings (press 'S' to start, 'P' to pause)
document.addEventListener("keydown", (event) => {
  if (event.key === "S" || event.key === "s") {
    if (!isAnimating) {
      isAnimating = true;
      imageElement.style.animationPlayState = "running";    
      switchInterval = setInterval(switchImage, 500);
    }
  } else if (event.key === "P" || event.key === "p") {
    isAnimating = false;
    imageElement.style.animationPlayState = "paused";
    clearInterval(switchInterval);
  }
});
