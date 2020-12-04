class Home2 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image2, gif2, bgImg2, caring, ourMission, achievements, volunteer, slideshowImages2) {
    // home page background template
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


    // slideshow
  //  this.home2Slideshow.display();
  }

  draw() {
    push();
    // drawing background and website template image
    background(this.background2);
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
      currentState = new OurMission2(ourMissionBg, homeIcon);
    }

    // clicking on caring in the menu opens the caring page
    if (mouseX > this.caringMenux - this.caringMenu.width / 2 &&
      mouseX < this.caringMenux + this.caringMenu.width / 2 &&
      mouseY > this.caringMenuy - this.caringMenu.height / 2 &&
      mouseY < this.caringMenuy + this.caringMenu.height / 2) {
      // current state definition
      currentState = new Caring2(caringBg, homeIcon);
    }

    // clicking on achievements in the menu opens the achievements page
    if (mouseX > this.achievementsMenux - this.achievementsMenu.width / 2 &&
      mouseX < this.achievementsMenux + this.achievementsMenu.width / 2 &&
      mouseY > this.achievementsMenuy - this.achievementsMenu.height / 2 &&
      mouseY < this.achievementsMenuy + this.achievementsMenu.height / 2) {
      // current state definition
      currentState = new Achievements2(achievementsBg, homeIcon);
    }

    // clicking on volunteer in the menu opens the volunteer page
    if (mouseX > this.volunteerMenux - this.volunteerMenu.width / 2 &&
      mouseX < this.volunteerMenux + this.volunteerMenu.width / 2 &&
      mouseY > this.volunteerMenuy - this.volunteerMenu.height / 2 &&
      mouseY < this.volunteerMenuy + this.volunteerMenu.height / 2) {
      // current state definition
      currentState = new Volunteer2(volunteerBg, homeIcon);
    }
  }
}
