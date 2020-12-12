class Caring {

  constructor(caringBg, homeIcon, cursor){

    // page template background happy
    this.caringBg = caringBg
    this.caringBgx = 0;
    this.caringBgy = 0;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

  // display background template, home icon and hand cursor
  display(){
    push();
    image(this.caringBg, this.caringBgx, this.caringBgy);
    pop();
    // display home Icon
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();

    // cursor image hand
    push();
    imageMode(CENTER);
    this.cursorx = mouseX;
    this.cursory = mouseY;
    image(this.cursor, this.cursorx, this.cursory);
    pop();
  }

  draw(){
    push();
    this.display();
    pop();
  }

  mousePressed(){
     if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
        mouseX < this.homeIconx + this.homeIcon.width / 2 &&
        mouseY > this.homeIcony - this.homeIcon.height / 2 &&
        mouseY < this.homeIcony + this.homeIcon.height / 2) {
        // current state definition
        currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer, slideshowImages, cursor);
        currentState.homeSlideshow.startSlideshow();
        clickSFX.play();
      }

  }

  keyTyped(){
  }
  KeyPressed(){
  }
}
