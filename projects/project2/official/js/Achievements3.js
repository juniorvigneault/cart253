class Achievements3 {

  constructor(achievementsBg2, homeIcon, cursor) {

    // page template background happy
    this.achievementsBg = achievementsBg2;
    this.achievementsBgx = 0;
    this.achievementsBgy = 0;

    // checking if the page has been visited
    this.achievementsChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 850;
    this.homeIcony = 800;

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

  // display background template, home icon and hand cursor
  display() {
    push();
    image(this.achievementsBg, this.achievementsBgx, this.achievementsBgy);
    pop();

    // display home icon
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

  keyTyped(){
  }
  KeyPressed(){
  }
}
