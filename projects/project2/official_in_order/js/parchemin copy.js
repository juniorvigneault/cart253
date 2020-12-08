


this.parchemin1 = parchemin1;
this.parchemin1x = width / 2;
this.parchemin1y = height / 2;
this.parchemin1Display = true;

// unrolled parchemin with message
this.parchemin2 = parchemin2;
this.parchemin2x = width / 2;
this.parchemin2y = height / 2;
this.parchemin2PopUp = false;
this.close = close;
this.closex = width/2;
this.closey = height/2 *1.4;



    // clicking on the closed parchemin opens the unrolled version with sound effect
    if (mouseX > this.parchemin1x - this.parchemin1.width / 2 &&
      mouseX < this.parchemin1x + this.parchemin1.width / 2 &&
      mouseY > this.parchemin1y - this.parchemin1.height / 2 &&
      mouseY < this.parchemin1y + this.parchemin1.height / 2) {
      // hides the rolled parchemin after opening it
      setTimeout(this.hideParchemin1.bind(this), 50);
      // opens the parchemin
      setTimeout(this.togglePopUp.bind(this), 50);


    }

    // clicking on close in parchemin after reading hides the pop up
    if (mouseX > this.closex - this.close.width / 2 &&
      mouseX < this.closex + this.close.width / 2 &&
      mouseY > this.closey - this.close.height / 2 &&
      mouseY < this.closey + this.close.height / 2) {
      // hides the pop up parchemin
      this.hidePopUp();
      currentState = new Home3(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2);

    }
  }

  displayparchemin1() {
    push();
    imageMode(CENTER);
    image(this.parchemin1, this.parchemin1x, this.parchemin1y);
    pop();
  }
  // hide the rolled parchemin
  hideParchemin1(){
    this.parchemin1Display = false;
  }


  // parchemin pop up
  // display
  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.parchemin2, this.parchemin2x, this.parchemin2y);
    image(this.close, this.closex, this.closey);
    pop();
  }
 // toggle
  togglePopUp() {
    this.parchemin2PopUp = true;
    parcheminSFX.play();
  }
// hide
  hidePopUp() {
    this.parchemin2PopUp = false;
    parchemin2SFX.play();
  }


// IN DISPLAY :
if (this.parchemin1Display) {
  this.displayparchemin1();
}

// display opened parchemin when toggled

if (this.parchemin2PopUp) {
  this.displayPopUp();
}
