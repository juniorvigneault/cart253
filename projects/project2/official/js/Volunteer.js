class Volunteer {

  constructor(volunteerBg, homeIcon, glitchHorse) {
    this.volunteerBg = volunteerBg
    this.volunteerBgx = 0;
    this.volunteerBgy = 0;

    // checking if the user visited the caring page
    this.volunteerChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // glitch horse pop up after clicking home Icon not appearing
    this.horsePopUp = false;
    this.glitchHorse = glitchHorse;
    this.glitchHorsex = windowWidth / 2;
    this.glitchHorsey = windowHeight / 2;
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
    currentState = new Volunteer2(volunteerBg, homeIcon);
  }
}
