class Achievements2 {

  constructor(achievementsBg2, homeIcon, parchemin1, parchemin2, close) {
    this.achievementsBg = achievementsBg2;
    this.achievementsBgx = 0;
    this.achievementsBgy = 0;

    // checking if the page has been visited
    this.achievementsChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // parchemin closed
    this.parchemin1 = parchemin1;
    this.parchemin1x = width / 2;
    this.parchemin1y = height / 2;
    this.parchemin1Display = true;
    // opened secret journal
    this.parchemin2 = parchemin2;
    this.parchemin2x = width / 2;
    this.parchemin2y = height / 2;
    this.parchemin2PopUp = false;
    // close Button
    this.close = close;
    this.closex = width / 2 * 0.7
    this.closey = height / 2 * 1.5
  }

  // display background
  display() {
    push();
    image(this.achievementsBg, this.achievementsBgx, this.achievementsBgy);
    pop();

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
      currentState = new Home3(homePageImage3, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse);
      // currentState.home2Slideshow.startSlideshow();
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
    }
  }

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
}
