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
    // enter text
    image(this.enterCollage, this.enterCollagex, this.enterCollagey);
    // runing horse small gif
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

  // press enter to access home
  mousePressed() {
    if (mouseX > this.enterGifx - this.enterGif.width / 2 &&
      mouseX < this.enterGifx + this.enterGif.width / 2 &&
      mouseY > this.enterGify - this.enterGif.height / 2 &&
      mouseY < this.enterGify + this.enterGif.height / 2) {

      // current state definition
      // currentState = new TheEnd();
      // currentState = new Home4(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, cursor);
      // currentState = new OurMission3(ourMission2Bg, homeIcon, horseGhost, close, flask1, ghostCaught)
      // currentState = new OurMission2(ourMission2Bg, homeIcon, horseGhost, wanderingInfo, close, cursor, glitchHorse)
      // currentState = new Achievements2(achievementsBg2, homeIcon, parchemin1, parchemin2, close, cursor)
      // currentState = new Caring2(caringBg2, homeIcon, flask1, flask2, close, chest, password, unlockButton, cursor)
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer, slideshowImages, cursor);
      currentState.homeSlideshow.startSlideshow();
      guitarMusic.loop();
      clickSFX.play();
      // isanybodythereSFX.loop();
      // darkSFX.loop();
    }
  }

  keyTyped(){
  }
  KeyPressed(){
  }

}
