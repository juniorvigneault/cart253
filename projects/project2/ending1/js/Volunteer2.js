class Volunteer2 {

  constructor(volunteerBg, homeIcon, cursor) {

    this.volunteerBg = volunteerBg
    this.volunteerBgx = 0;
    this.volunteerBgy = 0;

    // checking if the user visited the caring page
    this.volunteerChecked = false;

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
    image(this.volunteerBg, this.volunteerBgx, this.volunteerBgy);
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
      // current state definition -- goes to dark homepage and starts adventure
      currentState = new Home2(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, journal1, journal2, close, cursor);
      // starts dark drone sound
      darkSFX.loop();
      clickSFX.play();
      bgGlitchSFX.loop();
    }
  }

  keyTyped(){
  }
  KeyPressed(){
  }
  
}
