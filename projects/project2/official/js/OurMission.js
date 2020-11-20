class OurMission {

  constructor(ourMissionBg, homeIcon) {
    this.ourMissionBg = ourMissionBg;
    this.ourMissionBgx = 0;
    this.ourMissionBgy = 0;

    // checking if the user visited the our mission page
    this.ourMissionChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;
  }

  // display background
  display() {
    push();
    image(this.ourMissionBg, this.ourMissionBgx, this.ourMissionBgy);
    pop();

    // home icon display
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
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
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer);
      this.ourMissionChecked = true;
    }
  }
}
