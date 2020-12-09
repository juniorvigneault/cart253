class Caring2 {

  constructor(caringBg, homeIcon, flask1, flask2, close, chest, password, unlockButton) {
    this.caringBg = caringBg
    this.caringBgx = 0;
    this.caringBgy = 0;

    // checking if the user visited the caring page
    this.caringChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;

    // flask laying around
    this.flask1 = flask1;
    this.flask1x = width / 2;
    this.flask1y = height / 2;
    this.flask1Display = true;
    // you found flask
    this.flask2 = flask2;
    this.flask2x = width / 2;
    this.flask2y = height / 2;
    this.flask2PopUp = false;

    // // close button
    this.close = close;
    this.closex = width / 2 * 0.7
    this.closey = height / 2 * 1.5

    // locked chest
    this.chest = chest;
    this.chestx = width/2;
    this.chesty = height/2;
    this.chestAppear = true;

    this.magicWord = `renaissance`;

    this.password = password;
    this.passwordx = width/2;
    this.passwordy = height/2;

    this.unlockButton = unlockButton;
    this.unlockButtonx = width/2;
    this.unlockButtony = height/2 * 1.5;
    this.unlockButtonAppear = false;

    this.currentInput =``;
    this.textSize = 30;
    this.textColor = 0;
    this.correct = undefined;

  }

  // display background
  display() {
    push();
    image(this.caringBg, this.caringBgx, this.caringBgy);
    pop();
    // display home Icon
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();

    // chest
    if (this.chestAppear) {
      this.displayChest();
    }

    // you found flask pop up
    if (this.flask2PopUp) {
      this.displayPopUp();
    }
  }

  draw() {
    push();
    this.display();
    pop();

    push();
    this.correct = this.checkInput();
    if(this.correct){
      ellipse(300,300,300);
    }
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


    // clicking on the chest opens password pop up

    if (mouseX > this.chestx - this.chest.width / 2 &&
      mouseX < this.chestx + this.chest.width / 2 &&
      mouseY > this.chesty - this.chest.height / 2 &&
      mouseY < this.chesty + this.chest.height / 2) {
      // hides the rolled parchemin after opening it
      this.enterPassword();
      // opens the password pop up

    }

    // clicking on close button hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up
      this.hidePopUp();

    }
  }

  displayChest() {
    push();
    imageMode(CENTER);
    image(this.chest, this.chestx, this.chesty);
    pop();
  }
  // hide the small flask once clicked on
  hideChest() {
    this.chestAppear = false;
  }

  // you found flask pop up
  // display pop up with close button
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

  enterPassword(){
    this.checkInput();
    this.keyTyped();
    this.keyPressed();
    this.displayPassword();
  }

  checkInput(){
    let lowerCaseInput = this.currentInput.toLowerCase();

    if(lowerCaseInput === this.magicWord) {
      return true;
    }
    else {
      return false;
    }
  }
    keyTyped(){
      this.currentInput += key;
    }

    keyPressed(){
      if (keyCode === BACKSPACE) {
        currentInput = ``;
      }
    }

    displayPassword(){
      // password pop up
      push();
      imageMode(CENTER);
      image(this.password, this.passwordx, this.passwordy);
      image(this.unlockButton, this.unlockButtonx, this.unlockButtony);
      pop();
    }

}
