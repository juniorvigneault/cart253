class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image, gif, bgImg, caring, ourMission, achievements, volunteer, slideshowImage, cursor) {
    // home page background template
    this.homePageImagex = 0;
    this.homePageImagey = 0;
    this.homePageImage = image;
    // glitter gif
    this.horseDotComGif = gif;
    this.horseDotComGifx = this.homePageImagex + 10;
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

    // slide show
    this.homeSlideshow = new Slideshow(slideshowImage);

    // cursor
    this.cursor = cursor;
    this.cursorx = 0;
    this.cursory = 0;
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

    // slideshow
    this.homeSlideshow.display();

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
    // drawing background and website template image
    background(this.background);
    this.display();
    pop();
  }

  mousePressed() {
    // clicking on our mission in the menu opens the our mission page
    if (mouseX > this.ourMissionMenux - this.ourMissionMenu.width / 2 &&
      mouseX < this.ourMissionMenux + this.ourMissionMenu.width / 2 &&
      mouseY > this.ourMissionMenuy - this.ourMissionMenu.height / 2 &&
      mouseY < this.ourMissionMenuy + this.ourMissionMenu.height / 2) {
      // current state definition
      currentState = new OurMission(ourMissionBg, homeIcon, cursor);
      clickSFX.play();
    }

    // clicking on caring in the menu opens the caring page
    if (mouseX > this.caringMenux - this.caringMenu.width / 2 &&
      mouseX < this.caringMenux + this.caringMenu.width / 2 &&
      mouseY > this.caringMenuy - this.caringMenu.height / 2 &&
      mouseY < this.caringMenuy + this.caringMenu.height / 2) {
      // current state definition
      currentState = new Caring(caringBg, homeIcon, cursor);
      clickSFX.play();
    }

    // clicking on achievements in the menu opens the achievements page
    if (mouseX > this.achievementsMenux - this.achievementsMenu.width / 2 &&
      mouseX < this.achievementsMenux + this.achievementsMenu.width / 2 &&
      mouseY > this.achievementsMenuy - this.achievementsMenu.height / 2 &&
      mouseY < this.achievementsMenuy + this.achievementsMenu.height / 2) {
      // current state definition
      currentState = new Achievements(achievementsBg, homeIcon, cursor);
      clickSFX.play();
    }

    // clicking on volunteer in the menu opens the volunteer page
    if (mouseX > this.volunteerMenux - this.volunteerMenu.width / 2 &&
      mouseX < this.volunteerMenux + this.volunteerMenu.width / 2 &&
      mouseY > this.volunteerMenuy - this.volunteerMenu.height / 2 &&
      mouseY < this.volunteerMenuy + this.volunteerMenu.height / 2) {
      // current state definition
      currentState = new Volunteer(volunteerBg, homeIcon, glitchHorse, cursor);
      clickSFX.play();
    }
  }
}
