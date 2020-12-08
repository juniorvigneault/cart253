class Slideshow {

  constructor(slideshowImages) {

    // Array to store the slideshow images to display
    this.slideshowImages = slideshowImages;
    // Index in the array of the current image to display (the first one)
    this.currentSlideshowImage = 0;
    // The number of images total (for loading them in a for-loop)
    this.numImages = 4;
    // A place to store the timer that moves between the images in case we want to stop it
    this.slideshowTimer = undefined;

  }

  changeImage() {
    // Add one to the current image index and if it goes off the end of the array
    // reset to 0
    this.currentSlideshowImage = this.currentSlideshowImage + 1;
    if (this.currentSlideshowImage >= this.slideshowImages.length) {
      this.currentSlideshowImage = 0;
    }
  }

  display() {
    push();
    // Display the current slideshow image in the array
    image(this.slideshowImages[this.currentSlideshowImage], 730, 630, 800,800);
    pop();
  }

  startSlideshow(){
    // Start our slideshow timer, it will call the changeImage function every 1 second
    this.slideshowTimer = setInterval(this.changeImage.bind(this), 2000);
  }
}
