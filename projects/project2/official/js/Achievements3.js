class Achievements3 {

  constructor(achievementsBg2, homeIcon) {
    this.achievementsBg = achievementsBg2;
    this.achievementsBgx = 0;
    this.achievementsBgy = 0;

    // checking if the page has been visited
    this.achievementsChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;
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
      currentState = new Home4(homePageImage3, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse);
      // currentState.home2Slideshow.startSlideshow();
    }
  }
}
