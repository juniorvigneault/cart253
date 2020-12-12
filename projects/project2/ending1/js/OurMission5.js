class OurMission5 {

  constructor(ourMissionBg2, homeIcon, cursor) {
    this.ourMission2Bg = ourMissionBg2;
    this.ourMission2Bgx = 0;
    this.ourMission2Bgy = 0;

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
    image(this.ourMission2Bg, this.ourMission2Bgx, this.ourMission2Bgy);
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
        // sets timer for glitchy pop up
      clickSFX.play();
      currentState = new Home5(glitchHorse, flask1, curedHorse, boss1, boss2, gun);
      isanybodythereSFX.loop();
    }
}
}
