class Enter {

  // enter gif with horse montage
  constructor(collage, enterGif, cursor) {

    // Running horse gif
    this.enterGif = enterGif;
    this.enterGifx = width / 2
    this.enterGify = height * .6

    // Enter Button
    this.enterCollage = collage;
    this.enterCollagex = width / 2;
    this.enterCollagey = height / 2;

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

  display() {
    push();
    imageMode(CENTER);
    background(255);
    // collage
    image(this.enterCollage, this.enterCollagex, this.enterCollagey);
    //enter gif
    image(this.enterGif, this.enterGifx, this.enterGify, this.enterGifWidth, this.enterGifHeight);
    pop();

    // cursor image hand
    push();
    imageMode(CENTER);
    this.cursorx = mouseX;
    this.cursory = mouseY;
    image(this.cursor, this.cursorx, this.cursory);
    pop();
  }

  draw() {
    this.display();
  }

  mousePressed() {
    if (mouseX > this.enterGifx - this.enterGif.width / 2 &&
      mouseX < this.enterGifx + this.enterGif.width / 2 &&
      mouseY > this.enterGify - this.enterGif.height / 2 &&
      mouseY < this.enterGify + this.enterGif.height / 2) {
      // current state definition
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer, slideshowImages, cursor);
      currentState.homeSlideshow.startSlideshow();
      guitarMusic.loop();
      clickSFX.play();
      // darkSFX.loop();
    }
  }
}
