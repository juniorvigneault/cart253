class Caring2 {

  constructor(caringBg2, homeIcon, flask1, flask2, close, chest, password, unlockButton, cursor) {
    this.caringBg = caringBg2;
    this.caringBgx = 0;
    this.caringBgy = 0;

    // checking if the user visited the caring page
    this.caringChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;
    this.homeIconAppear = true;

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
    this.closex = 700;
    this.closey = 280;

    // locked chest
    this.chest = chest;
    this.chestx = width/2;
    this.chesty = height/2;
    this.chestAppear = true;

    this.magicWord = `cavalry`;

    this.password = password;
    this.passwordx = width/2;
    this.passwordy = height/2;
    this.passwordAppear = false;


    this.unlockButton = unlockButton;
    this.unlockButtonx = width/2;
    this.unlockButtony = height/2 * 1.3;
    this.unlockButtonAppear = false;

    this.currentInput =``;
    this.textSize = 50;
    this.textColor = 0;
    this.correct = undefined;

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;

  }

  // display background
  display() {
    push();
    image(this.caringBg, this.caringBgx, this.caringBgy);
    pop();

    // chest
    if (this.passwordAppear) {
      this.enterPassword();
    }

    // you found flask pop up
    if (this.flask2PopUp) {
      this.displayPopUp();
    }

    // you found flask pop up
    if (this.chestAppear) {
      this.displayChest();
    }

    // display home icon
    // if (this.homeIconAppear) {
    //   this.displayIcon();
    // }

    // cursor image hand
    push();
    imageMode(CENTER);
    this.cursorx = mouseX;
    this.cursory = mouseY;
    image(this.cursor, this.cursorx, this.cursory);
    pop();

    // display home Icon
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();
  }

  draw() {
    push();
    textSize(40);
    this.display();
    pop();

    push();
    this.correct = this.checkInput();
    if(this.correct){
    }
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


    // clicking on the chest opens password pop up

    if (mouseX > this.chestx - this.chest.width / 2 &&
      mouseX < this.chestx + this.chest.width / 2 &&
      mouseY > this.chesty - this.chest.height / 2 &&
      mouseY < this.chesty + this.chest.height / 2) {
      // hides the rolled parchemin after opening it
      this.passwordAppear = true;
      this.hideChest();
      // this.hideIcon();
      chestSFX.play();
      // opens the password pop up
    }

    // clicking on close button hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up
      this.hidePopUp();
      // this.displayIcon();
      clickSFX.play();
      currentState = new Caring3(caringBg2, homeIcon, cursor);
      clickSFX.play();
    }

    // clicking on close button hides the pop up
    if (this.unlockButtonAppear &&
      mouseX > this.unlockButtonx - this.unlockButton.width / 2 &&
      mouseX < this.unlockButtonx + this.unlockButton.width / 2 &&
      mouseY > this.unlockButtony - this.unlockButton.height / 2 &&
      mouseY < this.unlockButtony + this.unlockButton.height / 2) {
      // hides the pop up
      this.passwordAppear = false;
      setTimeout(this.togglePopUp.bind(this), 10);
      unlockSFX.play();
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
    this.displayPassword();
  }

  checkInput(){
    let lowerCaseInput = this.currentInput.toLowerCase();

    if(lowerCaseInput === this.magicWord) {
      this.unlockButtonAppear = true;
    }
  }

    keyTyped(){
      if (this.passwordAppear){
      this.currentInput += key;
    }
    }

    keyPressed(){
      if (keyCode === BACKSPACE && this.passwordAppear) {
        this.currentInput = ``;
      }
    }

    displayPassword(){
      // password pop up
      push();
      imageMode(CENTER);
      image(this.password, this.passwordx, this.passwordy);
      text(this.currentInput, this.passwordx - 30, this.passwordy -10)
      if (this.unlockButtonAppear) {
      image(this.unlockButton, this.unlockButtonx, this.unlockButtony);
      }
      pop();
    }

    // displayIcon(){
    //   // display home Icon
    //   push();
    //   imageMode(CENTER);
    //   image(this.homeIcon, this.homeIconx, this.homeIcony);
    //   pop();
    // }
    //
    // hideIcon(){
    //   push();
    //   this.homeIconAppear = false;
    //   pop();
    // }

}
