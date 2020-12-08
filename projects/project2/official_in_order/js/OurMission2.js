class OurMission2 {

  constructor(ourMissionBg2, homeIcon, flask1, flask2, close) {
    this.ourMission2Bg = ourMissionBg2;
    this.ourMission2Bgx = 0;
    this.ourMission2Bgy = 0;

    // checking if the user visited the our mission page
    this.ourMissionChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // secret journal closed
    this.flask1 = flask1;
    this.flask1x = width/2;
    this.flask1y = height/2;
    this.flask1Display = true;
    // opened secret journal
    this.flask2 = flask2;
    this.flask2x = width/2;
    this.flask2y = height/2;
    this.flask2PopUp = false;

    // // close
    this.close = close;
    this.closex = width/2 * 0.7
    this.closey = height/2 * 1.5

  }

  // display background
  display() {
    push();
    image(this.ourMission2Bg, this.ourMission2Bgx, this.ourMission2Bgy);
    pop();

    // home icon display
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();

    // display journals

    // closed journal
    if (this.flask1Display) {
      this.displayflask1();
    }

    // display opened journal when toggled
    if (this.flask2PopUp) {
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
      currentState = new Home3(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse);
      // currentState.home2Slideshow.startSlideshow();
    }

    // clicking on the closed journal opens the opened version with sound effect
    if (mouseX > this.flask1x - this.flask1.width / 2 &&
      mouseX < this.flask1x + this.flask1.width / 2 &&
      mouseY > this.flask1y - this.flask1.height / 2 &&
      mouseY < this.flask1y + this.flask1.height / 2) {
      // hides the rolled parchemin after opening it
      setTimeout(this.hideflask1.bind(this), 50);
      // opens the parchemin
      setTimeout(this.togglePopUp.bind(this), 50);
    }

    // clicking on close in opened journal hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up parchemin
      this.hidePopUp();
    }
  }

  displayflask1() {
    push();
    imageMode(CENTER);
    image(this.flask1, this.flask1x, this.flask1y);
    pop();
  }
  // hide the closed journal
  hideflask1(){
    this.flask1Display = false;
  }


  // secret journal pop up
  // display
  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.flask2, this.flask2x, this.flask2y);
    image(this.close, this.closex, this.closey);
    pop();
  }
 // toggle
  togglePopUp() {
    this.flask2PopUp = true;
    stabSFX.play();
  }
// hide
  hidePopUp() {
    this.flask2PopUp = false;
    parchemin2SFX.play();
  }
}
