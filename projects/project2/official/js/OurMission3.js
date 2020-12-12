class OurMission3 {

  constructor(ourMissionBg2, homeIcon, horseGhost, close, flask1, ghostCaught, cursor) {
    this.ourMission2Bg = ourMissionBg2;
    this.ourMission2Bgx = 0;
    this.ourMission2Bgy = 0;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // ghost of horse
    this.horseGhost = horseGhost;
    this.horseGhostx = width / 2;
    this.horseGhosty = height / 2;
    this.horseGhostSpeed = 15;
    this.horseGhostvx = 0;
    this.horseGhostvy = 0;
    this.horseGhostNotCaptured = true;
    this.changeDirection = undefined;

    // flask to capture ghost
    this.flask1 = flask1;
    this.flask1Appear = true;

    // wandering soul pop up
    this.ghostCaught = ghostCaught;
    this.ghostCaughtx = width / 2;
    this.ghostCaughty = height / 2;
    this.ghostCaughtAppear = false;

    // close button
    this.close = close;
    this.closex = width / 2 * 0.8
    this.closey = height / 2 * 0.6
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

    // Ghost pop up display

    // closed journal
    if (this.ghostCaughtAppear) {
      this.displayPopUp();
    }

    if (this.flask1Appear) {
      this.displayFlask();
    }
  }

  draw() {
    push();
    this.display();
    this.displayGhost();
    this.moveGhost();
    this.wrapGhost();
    pop();
  }

  mousePressed() {

    // clicking on the closed journal opens the opened version with sound effect
    if (mouseX > this.horseGhostx - this.horseGhost.width / 2 &&
      mouseX < this.horseGhostx + this.horseGhost.width / 2 &&
      mouseY > this.horseGhosty - this.horseGhost.height / 2 &&
      mouseY < this.horseGhosty + this.horseGhost.height / 2) {
      // opens the pop up
      setTimeout(this.togglePopUp.bind(this), 50);
      ghostSFX.play();
      // this.hideFlask();
    }

    // clicking on close in opened journal hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up parchemin
      this.hidePopUp();
      currentState = new OurMission5(ourMission2Bg, homeIcon, cursor);
      clickSFX.play();
    }

    if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
      mouseX < this.homeIconx + this.homeIcon.width / 2 &&
      mouseY > this.homeIcony - this.homeIcon.height / 2 &&
      mouseY < this.homeIcony + this.homeIcon.height / 2) {
      // sets timer for glitchy pop up
      clickSFX.play();
      currentState = new Home4(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, cursor);
    }
  }

  displayGhost() {

    // display ghost trail
    // for(let i = 0; i < this.ghostTrail.length; i++) {
    //   let position = this.ghostTrail[i];
    //   push();
    //   imageMode(CENTER);
    //   image(this.horseGhost, this.horseGhostx, this.horseGhosty);
    //   pop();
    // }
    if (this.horseGhostNotCaptured) {
      push();
      imageMode(CENTER);
      image(this.horseGhost, this.horseGhostx, this.horseGhosty);
      pop();
      //
      // this.newTrailPosition.x = this.horseGhostx;
      // this.newTrailPosition.y = this.horseGhosty;
      //
      // this.ghostTrail.push(newTrailPosition);
    }
  }

  moveGhost() {
    this.changeDirection = random();
    if (this.changeDirection < 0.02) {
      this.horseGhostvx = random(-this.horseGhostSpeed, this.horseGhostSpeed);
      this.horseGhostvy = random(-this.horseGhostSpeed, this.horseGhostSpeed);
    }
    this.horseGhostx = this.horseGhostx + this.horseGhostvx;
    this.horseGhosty = this.horseGhosty + this.horseGhostvy;
  }

  wrapGhost() {
    if (this.horseGhostx > width) {
      this.horseGhostx -= width;
    } else if (this.horseGhostx < 0) {
      this.horseGhostx += width;
    } else if (this.horseGhosty > width) {
      this.horseGhosty -= width;
    } else if (this.horseGhosty < 0) {
      this.horseGhosty += width;
    }
  }

  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.ghostCaught, this.ghostCaughtx, this.ghostCaughty);
    image(this.close, this.closex, this.closey);
    pop();
  }

  togglePopUp() {
    this.ghostCaughtAppear = true;
    this.horseGhostNotCaptured = false;
  }

  hidePopUp() {
    this.ghostCaughtAppear = false;
  }

  displayFlask() {
    push();
    imageMode(CENTER);
    image(this.flask1, mouseX, mouseY);
    pop();
  }

  keyTyped(){
  }
  KeyPressed(){
  }
  
}
