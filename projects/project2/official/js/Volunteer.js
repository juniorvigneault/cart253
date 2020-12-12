class Volunteer {

  constructor(volunteerBg, homeIcon, glitchHorse, cursor) {

    this.volunteerBg = volunteerBg
    this.volunteerBgx = 0;
    this.volunteerBgy = 0;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // glitch horse pop up after clicking home Icon not appearing
    this.horsePopUp = false;
    this.glitchHorse = glitchHorse;
    this.glitchHorsex = windowWidth / 2;
    this.glitchHorsey = windowHeight / 2;

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

    // displaying horsePopUp
    if (this.horsePopUp) {
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

      // sets timer for glitchy pop up
      setTimeout(this.togglePopUp.bind(this), 500);
      clickSFX.play();
    }
  }

  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.glitchHorse, this.glitchHorsex, this.glitchHorsey);
    pop();
  }

  togglePopUp() {
    this.horsePopUp = true;
    guitarMusic.stop();
    isanybodythereSFX.loop();
    setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hidePopUp() {
    this.horsePopUp = false;
    // guitarMusic.loop();
    isanybodythereSFX.stop();
    stabSFX.play();
    currentState = new Volunteer2(volunteerBg, homeIcon, cursor);
  }

  keyTyped(){
  }
  KeyPressed(){
  }
  
}
