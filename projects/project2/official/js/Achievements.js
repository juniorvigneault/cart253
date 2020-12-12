class Achievements {

  constructor(achievementsBg, homeIcon) {

    // page template background happy
    this.achievementsBg = achievementsBg
    this.achievementsBgx = 0;
    this.achievementsBgy = 0;

    // checking if the page has been visited
    this.achievementsChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // hand cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

    // display background template, home icon and hand cursor
  display() {
    push();
    image(this.achievementsBg, this.achievementsBgx, this.achievementsBgy);
    pop();

    // home icon display
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

    // draw
  draw() {
    push();
    this.display();
    pop();
  }

    // mouse pressed home icon brings back to home
  mousePressed() {
    if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
      mouseX < this.homeIconx + this.homeIcon.width / 2 &&
      mouseY > this.homeIcony - this.homeIcon.height / 2 &&
      mouseY < this.homeIcony + this.homeIcon.height / 2) {
      // current state definition
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer, slideshowImages, cursor);
      // starts slideshow in slideshow class
      currentState.homeSlideshow.startSlideshow();
      // clicking sound
      clickSFX.play();
    }
  }

  keyTyped(){
  }
  KeyPressed(){
  }
}
