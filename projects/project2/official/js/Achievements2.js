class Achievements2 {

  constructor(achievementsBg2, homeIcon, parchemin1, parchemin2, close, cursor) {

    // page template background dark
    this.achievementsBg = achievementsBg2;
    this.achievementsBgx = 0;
    this.achievementsBgy = 0;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 850;
    this.homeIcony = 800;

    // parchemin closed
    this.parchemin1 = parchemin1;
    this.parchemin1x = width / 2;
    this.parchemin1y = height / 2;
    this.parchemin1Display = true;

    // opened secret parchemin with password and info
    this.parchemin2 = parchemin2;
    this.parchemin2x = width / 2;
    this.parchemin2y = height / 2;
    this.parchemin2PopUp = false;
    // close Button in parchemin
    this.close = close;
    this.closex = 650;
    this.closey = 290;

    // hand cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
  }

  // display background template, home icon, cursor and parchemin (opened and closed)
  display() {
    push();
    image(this.achievementsBg, this.achievementsBgx, this.achievementsBgy);
    pop();

    // home
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();

    // closed parchemin
    if (this.parchemin1Display) {
      this.displayParchemin1();
    }

    // display opened parchemin when toggled
    if (this.parchemin2PopUp) {
      this.displayPopUp();
    }

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
      currentState = new Home7(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, cursor);
      satanSFX.stop();
      clickSFX.play();
    }

    // clicking on the closed parchemin opens the opened version with sound effect
    if (mouseX > this.parchemin1x - this.parchemin1.width / 2 &&
      mouseX < this.parchemin1x + this.parchemin1.width / 2 &&
      mouseY > this.parchemin1y - this.parchemin1.height / 2 &&
      mouseY < this.parchemin1y + this.parchemin1.height / 2) {
      // hides the rolled parchemin after opening it
      setTimeout(this.hideParchemin1.bind(this), 50);
      // opens the parchemin pop up
      setTimeout(this.togglePopUp.bind(this), 50);
    }

    // clicking on close in opened parchemin hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up parchemin
      this.hidePopUp();
      clickSFX.play();
    }
  }

  // display closed parchemin
  displayParchemin1() {
    push();
    imageMode(CENTER);
    image(this.parchemin1, this.parchemin1x, this.parchemin1y);
    pop();
  }
  // hide the closed journal
  hideParchemin1() {
    this.parchemin1Display = false;
  }


  // secret journal pop up
  // display
  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.parchemin2, this.parchemin2x, this.parchemin2y);
    image(this.close, this.closex, this.closey);
    pop();
  }
  // toggle
  togglePopUp() {
    this.parchemin2PopUp = true;
    parcheminSFX.play();
  }
  // hide
  hidePopUp() {
    this.parchemin2PopUp = false;
    parchemin2SFX.play();
  }
  
  keyTyped(){
  }
  KeyPressed(){
  }
}
