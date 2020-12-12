class Slideshow {
  // class displaying the slideshow of images in home page
  constructor(slideshowImages) {

    // Array to store the slideshow images to display
    this.slideshowImages = slideshowImages;
    // Index in the array of the current image to display (the first one)
    this.currentSlideshowImage = 0;
    // The number of images total (for loading them in a for-loop)
    this.numImages = 4;
    // A place to store the timer that moves between the images in case we want to stop it
    this.slideshowTimer = undefined;

    this.slideShowx = 1250;
    this.slideShowy = 530;
    this.slideShowSize = 500;

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
    imageMode(CENTER);
    image(this.slideshowImages[this.currentSlideshowImage], this.slideShowx, this.slideShowy, this.slideShowSize, this.slideShowSize);
    pop();
  }

  startSlideshow() {
    // Start our slideshow timer, it will call the changeImage function every 1 second
    this.slideshowTimer = setInterval(this.changeImage.bind(this), 2000);
  }

  keyTyped(){
  }
  KeyPressed(){
  }
  
}
