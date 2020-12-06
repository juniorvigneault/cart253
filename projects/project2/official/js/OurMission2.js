class OurMission2 {

  constructor(ourMissionBg2, homeIcon) {
    this.ourMission2Bg = ourMissionBg2;
    this.ourMission2Bgx = 0;
    this.ourMission2Bgy = 0;

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
    image(this.ourMission2Bg, this.ourMission2Bgx, this.ourMission2Bgy);
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
      currentState = new Home3(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2);
      // currentState.home2Slideshow.startSlideshow();
    }
  }
}
