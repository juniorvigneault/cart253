class Home2 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image2, gif2, bgImg2, caring, ourMission, achievements, volunteer, slideshowImages2, journal1, journal2, close) {
    // home page background glitch happy/dark
    this.homePage2Imagex = 0;
    this.homePage2Imagey = 0;
    this.homePage2Image = image2;
    // glitter gif
    this.horseDotCom2Gif = gif2;
    this.horseDotCom2Gifx = this.homePage2Imagex + 50;
    this.horseDotCom2Gify = this.homePage2Imagey + 30;
    this.horseDotcom2GifWidth = 439.5;
    this.horseDotcom2GifHeight = 180;
    // background filling the canvas (not final)
    this.background2 = bgImg2;
    this.background2x = 0;
    this.background2y = 0;

    // menu column
    this.ourMissionMenu = ourMission
    this.ourMissionMenux = 150;
    this.ourMissionMenuy = 300;

    this.caringMenu = caring;
    this.caringMenux = 150;
    this.caringMenuy = 400;

    this.achievementsMenu = achievements;
    this.achievementsMenux = 150;
    this.achievementsMenuy = 500;

    this.volunteerMenu = volunteer;
    this.volunteerMenux = 150;
    this.volunteerMenuy = 600;

    // slideshow 2
    this.home2Slideshow = new Slideshow(slideshowImages2);

    // secret journal closed
    this.journal1 = journal1;
    this.journal1x = width / 2;
    this.journal1y = height / 2;
    this.journal1Display = true;
    // opened secret journal
    this.journal2 = journal2;
    this.journal2x = width / 2;
    this.journal2y = height / 2;
    this.journal2PopUp = false;
    // close
    this.close = close;
    this.closex = width / 2 * 0.7
    this.closey = height / 2 * 1.5

  }


  display() {
    push();
    // display background website
    image(this.homePage2Image, this.homePage2Imagex, this.homePage2Imagey);

    // display horse.com glitter gif
    // image(this.horseDotCom2Gif, this.horseDotCom2Gifx, this.horseDotCom2Gify, this.horseDotcom2GifWidth, this.horseDotcom2GifHeight);
    pop();

    // displaying menu images
    push();
    imageMode(CENTER);
    image(this.ourMissionMenu, this.ourMissionMenux, this.ourMissionMenuy);
    image(this.caringMenu, this.caringMenux, this.caringMenuy);
    image(this.achievementsMenu, this.achievementsMenux, this.achievementsMenuy);
    image(this.volunteerMenu, this.volunteerMenux, this.volunteerMenuy);


    // slideshow dark
    //  this.home2Slideshow.display();

    // Journal clue display

    // closed journal
    if (this.journal1Display) {
      this.displayjournal1();
    }

    // display opened journal when toggled
    if (this.journal2PopUp) {
      this.displayPopUp();
    }

  }

  draw() {
    push();
    // drawing background and website template image
    background(this.background2);
    this.display();
    pop();
  }

  mousePressed() {

    // clicking on the closed journal opens the opened version with sound effect
    if (mouseX > this.journal1x - this.journal1.width / 2 &&
      mouseX < this.journal1x + this.journal1.width / 2 &&
      mouseY > this.journal1y - this.journal1.height / 2 &&
      mouseY < this.journal1y + this.journal1.height / 2) {
      // hides the rolled parchemin after opening it
      setTimeout(this.hidejournal1.bind(this), 50);
      // opens the parchemin
      setTimeout(this.togglePopUp.bind(this), 50);
    }

  // clicking on close in opened journal hides the pop up
  if (mouseX > this.closex - this.close.width / 2 &&
    mouseX < this.closex + this.close.width / 2 &&
    mouseY > this.closey - this.close.height / 2 &&
    mouseY < this.closey + this.close.height / 2) {
    // hides the pop up parchemin
    this.hidePopUp();

    currentState = new Home3(homePageImage2, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse);
  }
}

displayjournal1() {
  push();
  imageMode(CENTER);
  image(this.journal1, this.journal1x, this.journal1y);
  pop();
}
// hide the closed journal
hidejournal1(){
  this.journal1Display = false;
}


// secret journal pop up
// display
displayPopUp() {
  push();
  imageMode(CENTER);
  image(this.journal2, this.journal2x, this.journal2y);
  image(this.close, this.closex, this.closey);
  pop();
}
// toggle
togglePopUp() {
  this.journal2PopUp = true;
  parcheminSFX.play();
}
// hide
hidePopUp() {
  this.journal2PopUp = false;
  parchemin2SFX.play();
}
}
