class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image, gif, bgImg, caring, ourMission, achievements, volunteer) {
    // home page background template
    this.homePageImagex = 0;
    this.homePageImagey = 0;
    this.homePageImage = image;
    // glitter gif
    this.horseDotComGif = gif;
    this.horseDotComGifx = this.homePageImagex + 50;
    this.horseDotComGify = this.homePageImagey + 30;
    this.horseDotcomGifWidth = 439.5;
    this.horseDotcomGifHeight = 180;
    // background filling the canvas (not final)
    this.background = bgImg;
    this.backgroundx = 0;
    this.backgroundy = 0;

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

    // // slideshow
    // this.slideshowImages = []
    // this.currentSlideshowImage = 0;
    // this.numImages = 4;
    // this.slideshowTimer = setInterval(this.changeimage(), 1000);
  }


  display() {
    push();
    // display background website
    image(this.homePageImage, this.homePageImagex, this.homePageImagey);

    // display horse.com glitter gif
    image(this.horseDotComGif, this.horseDotComGifx, this.horseDotComGify, this.horseDotcomGifWidth, this.horseDotcomGifHeight);
    pop();

    // displaying menu images
    push();
    imageMode(CENTER);
    image(this.ourMissionMenu, this.ourMissionMenux, this.ourMissionMenuy);
    image(this.caringMenu, this.caringMenux, this.caringMenuy);
    image(this.achievementsMenu, this.achievementsMenux, this.achievementsMenuy);
    image(this.volunteerMenu, this.volunteerMenux, this.volunteerMenuy);

    // // Display the current slideshow image in the array
    // image(slideshowImages[this.currentSlideshowImage], width / 2, height / 2);
    // pop();
  }

  draw() {
    push();
    // drawing background and website template image
    background(this.background);
    this.display();
    pop();
  }

  mousePressed() {
    // clicking(this.ourMissionMenux, this.ourMissionMenuy, this.ourMissionMenu.width, this.ourMissionMenu.height, new OurMission(ourMissionBg))
    if (mouseX > this.ourMissionMenux - this.ourMissionMenu.width / 2 &&
      mouseX < this.ourMissionMenux + this.ourMissionMenu.width / 2 &&
      mouseY > this.ourMissionMenuy - this.ourMissionMenu.height / 2 &&
      mouseY < this.ourMissionMenuy + this.ourMissionMenu.height / 2) {
      // current state definition
      currentState = new OurMission(ourMissionBg, homeIcon);
    }

    if (mouseX > this.caringMenux - this.caringMenu.width / 2 &&
      mouseX < this.caringMenux + this.caringMenu.width / 2 &&
      mouseY > this.caringMenuy - this.caringMenu.height / 2 &&
      mouseY < this.caringMenuy + this.caringMenu.height / 2) {
      // current state definition
      currentState = new Caring(caringBg, homeIcon);
    }

    if (mouseX > this.caringMenux - this.caringMenu.width / 2 &&
      mouseX < this.caringMenux + this.caringMenu.width / 2 &&
      mouseY > this.caringMenuy - this.caringMenu.height / 2 &&
      mouseY < this.caringMenuy + this.caringMenu.height / 2) {
      // current state definition
      currentState = new Caring(caringBg);
    }
  }

  // clicking(x, y, w, h, state){
  //     if (mouseX > x - w / 2 &&
  //         mouseX < x + w / 2 &&
  //         mouseY > y - h / 2 &&
  //         mouseY < y + h / 2) {
  //         // current state definition
  //         currentState = state;
  //       }
  }
}
