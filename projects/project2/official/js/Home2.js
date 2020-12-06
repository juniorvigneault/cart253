class Home2 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image2, gif2, bgImg2, caring, ourMission, achievements, volunteer, slideshowImages2, parchemin1, parchemin2, close) {
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

    // rolled parchemin (clue 1)
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

    // parchemin clue display
    if (this.parchemin1Display) {
      this.displayparchemin1();
    }

    // display opened parchemin when toggled

    if (this.parchemin2PopUp) {
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
}
