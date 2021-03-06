class OurMission4 {

  constructor(ourMissionBg2, homeIcon, horseGhost, wanderingInfo, close, cursor) {

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
    this.horseGhostSpeed = 10;
    this.horseGhostvx = 0;
    this.horseGhostvy = 0;
    this.horseGhostCaptured = false;
    this.changeDirection = undefined;

    // this.ghostTrail = [];
    // this.newTrailPosition = {
    //   x: undefined,
    //   y: undefined
    // }

    // wandering soul pop up
    this.wanderingInfo = wanderingInfo;
    this.wanderingInfox = width / 2;
    this.wanderingInfoy = height / 2;
    this.wanderingInfoAppear = false;

    // // close button
    this.close = close;
    this.closex = width / 2 * 0.8
    this.closey = height / 2 * 0.6

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

    // Ghost pop up display

    // closed journal
    if (this.wanderingInfoAppear) {
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
    this.displayGhost();
    this.moveGhost();
    this.wrapGhost();
    pop();
  }

  mousePressed() {
    if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
      mouseX < this.homeIconx + this.homeIcon.width / 2 &&
      mouseY > this.homeIcony - this.homeIcon.height / 2 &&
      mouseY < this.homeIcony + this.homeIcon.height / 2) {
      // current state definition
      currentState = new Home7(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, cursor);
      clickSFX.play();
    }

    // clicking on the closed journal opens the opened version with sound effect
    if (mouseX > this.horseGhostx - this.horseGhost.width / 2 &&
      mouseX < this.horseGhostx + this.horseGhost.width / 2 &&
      mouseY > this.horseGhosty - this.horseGhost.height / 2 &&
      mouseY < this.horseGhosty + this.horseGhost.height / 2) {
      // opens the pop up
      setTimeout(this.togglePopUp.bind(this), 50);
      ghostSFX.play();
    }

    // clicking on close in opened journal hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up parchemin
      this.hidePopUp();
      clickSFX.play();
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
    image(this.wanderingInfo, this.wanderingInfox, this.wanderingInfoy);
    image(this.close, this.closex, this.closey);
    pop();
  }

  togglePopUp() {
    this.wanderingInfoAppear = true;
  }

  hidePopUp() {
    this.wanderingInfoAppear = false;
  }

  keyTyped(){
  }
  KeyPressed(){
  }
  
}
