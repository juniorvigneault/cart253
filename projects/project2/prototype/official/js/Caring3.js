class Caring3 {

  constructor(caringBg2, homeIcon, cursor) {
    this.caringBg = caringBg2;
    this.caringBgx = 0;
    this.caringBgy = 0;

    // checking if the user visited the caring page
    this.caringChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

  // display background
  display() {
    push();
    image(this.caringBg, this.caringBgx, this.caringBgy);
    pop();
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

  draw() {
    push();
    this.display();
    pop();
  }

  mousePressed() {
    if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
      mouseX < this.homeIconx + this.homeIcon.width / 2 &&
      mouseY > this.homeIcony - this.homeIcon.height / 2 &&
      mouseY < this.homeIcony + this.homeIcon.height / 2) {
      // current state definition
      currentState = new Home4(homePageImage3, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, cursor);
      clickSFX.play();
    }
  }
}
