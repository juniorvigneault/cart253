class Riddle {

  constructor(password, unlockButton){
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


  draw(){
    push();
    this.correct = this.checkInput();
    if(correct){
      ellipse(300,300,300);
    }
    pop();
  }

  display(){
    push();
    imageMode(CENTER);
    image(this.password, this.passwordx, this.passwordy);
    image(this.textBox, this.textBoxx, this.textBoxy);
    image(this.unlockButton, this.unlockButtonx, this.unlockButtony);
    pop();
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
}
